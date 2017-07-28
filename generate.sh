#!/bin/sh
TARGET=out
rm -rf "$TARGET"
mkdir "$TARGET"

# Allgemeine Doku
asciidoctor -D "$TARGET" index.adoc
asciidoctor-pdf -D "$TARGET" index.adoc

# Spiele Uebersicht
asciidoctor -D "$TARGET" spiele.adoc
asciidoctor-pdf -D "$TARGET" spiele.adoc

# Hase und Igel
HUI_DIR="$TARGET/spiele/hase-und-igel"
mkdir -p "$HUI_DIR"
asciidoctor -D $HUI_DIR spiele/hase-und-igel/index.adoc
asciidoctor -D $HUI_DIR spiele/hase-und-igel/regeln.adoc
asciidoctor-pdf -D $HUI_DIR spiele/hase-und-igel/regeln.adoc
asciidoctor -D $HUI_DIR spiele/hase-und-igel/xml-dokumentation.adoc
asciidoctor-pdf -D $HUI_DIR spiele/hase-und-igel/xml-dokumentation.adoc
