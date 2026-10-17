"""Build the party-night site: copy party/src/*.html to docs/, swapping
<!--QR:key--> placeholders for inline SVG QR codes.

Run with any Python that has `qrcode` installed:  python party/build.py
"""
import pathlib
import re

import qrcode
import qrcode.image.svg

BASE = "https://jennifermoura.me/ballotsandboos/"
LINKS = {
    "deck": BASE,
    "play": BASE + "play.html",
    "hall": BASE + "play.html#hall",
    "rulebook": BASE + "play.html#rulebook",
    "houseland": BASE + "play.html#houseland",
    "machine": BASE + "play.html#machine",
    "lostsouls": BASE + "play.html#lostsouls",
    "ghostwall": BASE + "play.html#ghostwall",
    "ballottrax": "https://hawaii.ballottrax.net",
    "olvr": "https://olvr.hawaii.gov",
    "conam": "https://elections.hawaii.gov/voting/2026-proposed-amendments-to-the-hawaii-state-constitution/",
    "charter": "https://www.honolulucitycouncil.org/oahuvotes",
    "civilbeat": "https://www.civilbeat.org/elections-2026/general/",
    "oha": "https://www.oha.org/vote/",
    "hprcharter": "https://www.hawaiipublicradio.org/local-news/2026-10-15/voting-explainer-2026-honolulu-charter-amendment-ballot-questions",
    "hprconam": "https://www.hawaiipublicradio.org/local-news/2026-10-13/voting-explainer-2026-state-constitutional-amendment-ballot-questions",
    "honelections": "https://www.honolulu.gov/elections/",
}

ROOT = pathlib.Path(__file__).resolve().parent.parent


def qr_svg(url: str) -> str:
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=2)
    qr.add_data(url)
    qr.make(fit=True)
    m = qr.get_matrix()
    n = len(m)
    path = "".join(
        f"M{x},{y}h1v1h-1z" for y, row in enumerate(m) for x, on in enumerate(row) if on
    )
    return (
        f'<svg class="qr" viewBox="0 0 {n} {n}" role="img" aria-label="QR code for {url}" '
        f'shape-rendering="crispEdges"><rect width="{n}" height="{n}" fill="#fff"/>'
        f'<path d="{path}" fill="#000"/></svg>'
    )


def main() -> None:
    out = ROOT / "docs"
    out.mkdir(exist_ok=True)
    cache = {}
    for src in sorted((ROOT / "party" / "src").glob("*.html")):
        html = src.read_text()

        def swap(match):
            key = match.group(1)
            if key not in cache:
                cache[key] = qr_svg(LINKS[key])
            return cache[key]

        html = re.sub(r"<!--QR:(\w+)-->", swap, html)
        (out / src.name).write_text(html)
        print("built", src.name)


if __name__ == "__main__":
    main()
