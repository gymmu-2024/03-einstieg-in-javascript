import { aufgabe01 } from "../script"

export function testSuite({ assert, funcs, APP }) {
  function nit(description, callback) {
    it(description, function () {
      if (typeof window === "undefined") {
        this.skip()
      } else {
        callback()
      }
    })
  }

  if (APP.type === "address") {
    describe("Vorname korrekt", function () {
      it("Die Funktion 'addressCheckFirstname()' soll existieren", function () {
        assert.equal(typeof funcs.addressCheckFirstname, "function")
      })
      it("Die Funktion 'addressCheckFirstname()' soll existieren", function () {
        assert.equal(typeof funcs.addressCheckFirstname, "function")
      })
      it("Falsch wenn Vorname leer ist", function () {
        const input = ""
        const res = funcs.addressCheckFirstname(input)
        assert.equal(res, false)
      })
      it("Richtig wenn Vorname länger wie ein Zeichen ist", function () {
        const input = "C"
        const res = funcs.addressCheckFirstname(input)
        assert.equal(res, true)
      })
    })
  } else {
    describe("Aufgabe 01", function () {
      it("Die Funktion 'aufgabe01()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe01, "function")
      })
      it("Sollte keine 'e's mehr drin haben", function () {
        const input = "Hello"
        const res = funcs.aufgabe01(input)
        assert.equal(res, "Hllo")
      })
      it("Sollte keine 'E's mehr drin haben", function () {
        const input = "Emoji"
        const res = funcs.aufgabe01(input)
        assert.equal(res, "moji")
      })
      it("Sollte mehrere 'e's löschen", function () {
        const input = "Hier hat es mehrere 'e's drin."
        const res = funcs.aufgabe01(input)
        assert.equal(res, "Hir hat s mhrr ''s drin.")
      })
    })

    describe("Aufgabe 02", function () {
      it("Die Funktion 'aufgabe02()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe02, "function")
      })
      it("Sollte nur noch Grossbuchstaben enthalten", function () {
        const input = "a"
        const res = funcs.aufgabe02(input)
        assert.equal(res, "A")
      })
      it("Sollte mehrere Buchstaben gross schreiben", function () {
        const input = "abc"
        const res = funcs.aufgabe02(input)
        assert.equal(res, "ABC")
      })
      it("Sollten Grossbuchstaben bleiben", function () {
        const input = "aBc"
        const res = funcs.aufgabe02(input)
        assert.equal(res, "ABC")
      })
      it("Kann auch mit Sonderzeichen umgehen", function () {
        const input = "Hier ist ein Satz mit mehreren Zeichen."
        const res = funcs.aufgabe02(input)
        assert.equal(res, "HIER IST EIN SATZ MIT MEHREREN ZEICHEN.")
      })
    })

    describe("Aufgabe 03", function () {
      it("Die Funktion 'aufgabe03()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe03, "function")
      })
      it("Sollte 1 'e' enthalten", function () {
        const input = "Hello"
        const res = funcs.aufgabe03(input)
        assert.equal(res, 1)
      })
      it("Sollte 4 'e's enthalten", function () {
        const input = "ein einfacher Text."
        const res = funcs.aufgabe03(input)
        assert.equal(res, 4)
      })
      it("Sollte auch 'E's zählen", function () {
        const input = "Ein einfacher Text."
        const res = funcs.aufgabe03(input)
        assert.equal(res, 4)
      })
    })

    describe("Aufgabe 04", function () {
      it("Die Funktion 'aufgabe04()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe04, "function")
      })
      it("Sollte 2 Wörter zählen", function () {
        const input = "Zwei Wörter"
        const res = funcs.aufgabe03(input)
        assert.equal(res, 2)
      })
      it("Sollte 4 Wörter zählen", function () {
        const input = "Nur vier Wörter hier."
        const res = funcs.aufgabe03(input)
        assert.equal(res, 4)
      })
      it("Kann auch mit Sonderzeichen umgehen", function () {
        const input =
          "Nicht alles - was von Leerzeichen getrennt wird, sind Wörter..."
        const res = funcs.aufgabe03(input)
        assert.equal(res, 9)
      })
      it("Zählt auch Zahlen als Wörter", function () {
        const input = "Nur vier Wörter hier."
        const res = funcs.aufgabe03(input)
        assert.equal(res, 4)
      })
    })
    describe("Aufgabe 05", function () {
      it("Die Funktion 'aufgabe05()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe05, "function")
      })
      it("Sollte keine Grossbuchstaben enthalten", function () {
        const input = "hier ist alles klein...."
        const res = funcs.aufgabe05(input)
        assert.equal(res, false)
      })
      it("Sollte genau ein Grossbuchstabe erkennen", function () {
        const input = "Hier ist nur der anfang gross!"
        const res = funcs.aufgabe05(input)
        assert.equal(res, true)
      })
      it("Sollte auch mehrere Grossbuchstaben erkennen", function () {
        const input = "Hier ist mehr wie nur der Anfang gross."
        const res = funcs.aufgabe05(input)
        assert.equal(res, true)
      })
      it("Sollte auch gehen wenn nicht der erste Buchstabe gross ist", function () {
        const input = "abcdEEEfg"
        const res = funcs.aufgabe05(input)
        assert.equal(res, true)
      })
      it("Sollte bei nur Sonderzeichen 'falsch' sein", function () {
        const input = "1 + 2 - 4 = -1"
        const res = funcs.aufgabe05(input)
        assert.equal(res, false)
      })
      it("Sollte 'falsch' sein für den leeren String", function () {
        const input = ""
        const res = funcs.aufgabe05(input)
        assert.equal(res, false)
      })
    })
    describe("Aufgabe 06", function () {
      it("Die Funktion 'aufgabe06()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe06, "function")
      })
      it("Sollte keine Sonderzeichen enthalten", function () {
        const input = "abc"
        const res = funcs.aufgabe06(input)
        assert.equal(res, false)
      })
      it("Das Leerzeichen wird nicht als Sonderzeichen erkannt", function () {
        const input = "Ohne Sonderzeichen"
        const res = funcs.aufgabe06(input)
        assert.equal(res, false)
      })
      it("Punkte sind Sonderzeichen", function () {
        const input = "Hier gibt es ein Sonderzeichen."
        const res = funcs.aufgabe06(input)
        assert.equal(res, true)
      })
      it("Sollte den leeren String nicht als Sonderzeichen erkennen", function () {
        const input = ""
        const res = funcs.aufgabe06(input)
        assert.equal(res, false)
      })
      it("Sollte Sonderzeichen mitten im Text erkennen", function () {
        const input = "Hey! Hier sind mehr wie ein Sonderzeichen."
        const res = funcs.aufgabe06(input)
        assert.equal(res, true)
      })
    })
    describe("Aufgabe 07", function () {
      it("Die Funktion 'aufgabe07()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe07, "function")
      })
      it("Sollte das Wort 'und' nicht enthalten", function () {
        const input = "and"
        const res = funcs.aufgabe07(input)
        assert.equal(res, false)
      })
      it("Sollte das Wort 'und' erkennen", function () {
        const input = "und"
        const res = funcs.aufgabe07(input)
        assert.equal(res, true)
      })
      it("Sollte 'Und' am Satzanfang finden", function () {
        const input = "Und hier ist auch ein und."
        const res = funcs.aufgabe07(input)
        assert.equal(res, true)
      })
      it("Sollte 'Und' nicht erkennen wenn es nicht am Satzanfang ist", function () {
        const input = "Hier ist ein falsches Und."
        const res = funcs.function07(input)
        assert.equal(res, false)
      })
    })
    describe("Aufgabe 08", function () {
      it("Die Funktion 'aufgabe08()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe08, "function")
      })
      it("Sollte 'e's mit '3' ersetzen", function () {
        const input = "e"
        const res = funcs.aufgabe08(input)
        assert.equal(res, "3")
      })
      it("Sollte mehrere 'e's mit '3' ersetzen", function () {
        const input = "abcdeeefgh"
        const res = funcs.aufgabe08(input)
        assert.equal(res, "abcd333fgh")
      })
      it("Sollte grosse 'E's nicht ersetzen", function () {
        const input = "ABCDEEEFGH"
        const res = funcs.aufgabe08(input)
        assert.equal(res, "ABCDEEEFGH")
      })
    })

    describe("Aufgabe 09", function () {
      it("Die Funktion 'aufgabe09()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe09, "function")
      })
      it("Sollte keine 6 Zeichen lang sein", function () {
        const input = "abcd"
        const res = funcs.aufgabe09(input)
        assert.equal(res, false)
      })
      it("Sollte genau 6 zeichen lang sein", function () {
        const input = "abcdef"
        const res = funcs.aufgabe09(input)
        assert.equal(res, true)
      })
      it("Sollte länger wie 6 Zeichen lang sein", function () {
        const input = "abcdefghijkl"
        const res = funcs.aufgabe09(input)
        assert.equal(res, false)
      })
      it("Sollte auch Leerzeichen zählen", function () {
        const input = "abc de"
        const res = funcs.aufgabe09(input)
        assert.equal(res, true)
      })
    })

    describe("Aufgabe 10", function () {
      it("Die Funktion 'aufgabe10()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe10, "function")
      })
      it("Sollte kein korrekter RGB Hexcode sein", function () {
        const input = "#FF009G"
        const res = funcs.aufgabe10(input)
        assert.equal(res, false)
      })
      it("Sollte ein korrekter Code sein", function () {
        const input = "#FF0077"
        const res = funcs.aufgabe10(input)
        assert.equal(res, true)
      })
      it("Sollte die Farbe 'rot' in Hexadezimal erkennen", function () {
        const input = "#FF0000"
        const res = funcs.aufgabe10(input)
        assert.equal(res, true)
      })
      it("Sollte die Farbe 'grün' in Hexadezimal erkennen", function () {
        const input = "#00FF00"
        const res = funcs.aufgabe10(input)
        assert.equal(res, true)
      })
      it("Sollte die Farbe 'blau' in Hexadezimal erkennen", function () {
        const input = "#0000FF"
        const res = funcs.aufgabe10(input)
        assert.equal(res, true)
      })
      it("Sollte die Farbe 'gelb' in Hexadezimal erkennen", function () {
        const input = "#FF00FF"
        const res = funcs.aufgabe10(input)
        assert.equal(res, true)
      })
      it("Sollte kein Hexcode sein wenn der Hash fehlt", function () {
        const input = "FF0077"
        const res = funcs.aufgabe10(input)
        assert.equal(res, false)
      })
    })

    describe("Aufgabe 11", function () {
      it("Die Funktion 'aufgabe11()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe11, "function")
      })
      it("Sollte den ASCII-Code von 'a' erkennen", function () {
        const input = "a"
        const res = funcs.aufgabe11(input)
        assert.equal(res, 97)
      })
      it("Sollte den ASCII-Code von 'B' erkennen", function () {
        const input = "B"
        const res = funcs.aufgabe11(input)
        assert.equal(res, 66)
      })
      it("Sollte 'null' zurückgeben wenn mehr wie ein Zeichen gegeben sind", function () {
        const input = "aB"
        const res = funcs.aufgabe11(input)
        assert.equal(res, null)
      })
      it("Sollte 'null' zurückgeben wenn keine Eingabe gegeben ist", function () {
        const input = ""
        const res = funcs.aufgabe11(input)
        assert.equal(res, null)
      })
    })
    describe("Aufgabe 12", function () {
      it("Die Funktion 'aufgabe12()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe12, "function")
      })
      it("Sollte eine 'e' an der Position 0 finden", function () {
        const input = "ein Text"
        const res = funcs.aufgabe12(input)
        assert.equal(res, 0)
      })
      it("Sollte eine 'e' an der Position 5 finden", function () {
        const input = "Ein Text"
        const res = funcs.aufgabe12(input)
        assert.equal(res, 5)
      })
      it("Sollte -1 zurückgeben wenn kein 'e' vorkommt", function () {
        const input = "abcdfgh"
        const res = funcs.aufgabe12(input)
        assert.equal(res, -1)
      })
    })
  }
}
