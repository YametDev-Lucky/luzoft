from bs4 import BeautifulSoup as bs
import sys
import getopt


def main(argv):
    outputDir = './dist'

    opts, _ = getopt.getopt(argv, "o:", "outdir=")

    for opt, arg in opts:
        if opt in ('-o', '--outdir'):
            outputDir = arg

    if outputDir.endswith("/"):
        outputDir = outputDir[:-1]

    with open("./dist/index.html", 'r+', encoding="utf-8") as f:
        html_content = f.read()
        parsed_html = bs(html_content, 'html.parser')

        styles = parsed_html.find('style')
        with open(f'{outputDir}/style.css', "w", encoding="utf-8") as sfile:
            sfile.write(styles.get_text())

        script = parsed_html.find('script')
        with open(f'{outputDir}/app.js', "w", encoding="utf-8") as jfile:
            jfile.write(script.get_text())


if __name__ == '__main__':
    main(sys.argv[1:])
