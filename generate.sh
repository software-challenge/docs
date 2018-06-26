#!/bin/bash

GENERATE_PDFS=false
GAMES="hase-und-igel piranhas"
while getopts "pg:" opt; do
  case $opt in
    p)
      GENERATE_PDFS=true
      ;;
    g)
      GAMES=$OPTARG
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
  esac
done

TARGET=out
rm -rf "$TARGET"
mkdir "$TARGET"

# Allgemeine Doku
asciidoctor -D "$TARGET" index.adoc
if [ "$GENERATE_PDFS" = true ]; then
  asciidoctor-pdf -D "$TARGET" index.adoc
fi

# Spiele Uebersicht
asciidoctor -D "$TARGET" spiele.adoc
if [ "$GENERATE_PDFS" = true ]; then
  asciidoctor-pdf -D "$TARGET" spiele.adoc
fi

cp -r images "$TARGET"

# Spiele
for GAME in $GAMES; do
  GAME_OUT_DIR="$TARGET/spiele/$GAME"
  mkdir -p "$GAME_OUT_DIR"
  cp -r "spiele/$GAME/images" "$GAME_OUT_DIR/.."
  for doc in $(find "spiele/$GAME" -name "*.adoc"); do
    echo processing $doc
    asciidoctor -D "$GAME_OUT_DIR" "$doc"
    if [ "$GENERATE_PDFS" = true ]; then
      asciidoctor-pdf -D "$GAME_OUT_DIR" "$doc"
    fi
  done
done
