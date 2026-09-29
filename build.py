"""Build the deployable index.html from content.html.

content.html is the page body (also used for the claude.ai preview). index.html wraps it in
the document shell. The live portrait runs from portal/ (patched portal.js, its PLY worker and
the two .bitymi bundles), so deploy that folder and images/ next to index.html.
"""
from pathlib import Path

root = Path(__file__).parent
src = (root / "content.html").read_text()

head, body = src.split("</style>\n", 1)
page = ("<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n"
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n"
        f"{head}</style>\n</head>\n<body>\n{body}</body>\n</html>\n")
(root / "index.html").write_text(page)
print("wrote index.html")
