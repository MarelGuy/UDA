import React from 'react'
import Footer from '../Components/Footer'

export default function Tpsit() {
    return (
        <div>
            <section className="text-center">
                <h1>Tpsit</h1>
                <h2>Regole e convenzione di codifica. Diritto d’autore e licenze software</h2>
            </section>

            <br />

            <section>
                <div>
                    <h3>Cosa è la convenzione di codifica? </h3>

                    <p>
                        Le convenzioni di codifica sono un insieme di linee guida per un linguaggio
                        di programmazione specifico che raccomanda stile, pratiche e metodi di
                        programmazione per ciascun aspetto di un programma scritto in quel linguaggio. <br />
                        Queste convenzioni in genere riguardano l'organizzazione dei file, il rientro,
                        i commenti, le dichiarazioni, le dichiarazioni, gli spazi bianchi, le convenzioni
                        di denominazione, le pratiche di programmazione, i principi di programmazione,
                        le regole pratiche di programmazione, le migliori pratiche di architettura, ecc.
                    </p>
                </div>

                <div>
                    <h3>Convenzioni comuni di codifica</h3>

                    <p>
                        Esistono numerose convenzioni di codifica; vedi Stile di codifica per numerosi
                        esempi e discussioni. <br /> Convenzioni di codifica comuni possono riguardare le seguenti
                        aree:
                    </p>
                    <ul>
                        <li>Convenzioni sui commenti</li>
                        <li>Convenzioni in stile rientro</li>
                        <li>Convenzioni di lunghezza della linea</li>
                        <li>Convenzioni di denominazione</li>
                        <li>Pratiche di programmazione</li>
                        <li>Principi di programmazione</li>
                        <li>Convenzioni di stile di programmazione</li>
                    </ul>
                </div>

                <div>
                    <h3>Cosa e’ il diritto d’autore?</h3>

                    <p>
                        Il diritto d’autore tutela gli autori e la loro creatività. È un diritto che
                        assicura un compenso al lavoro intellettuale e protegge la nascita e la vita
                        delle opere dell’ingegno. <br /> La SIAE è nata per la volontà degli stessi autori
                        di far rispettare questo diritto e poter continuare a creare.
                    </p>
                </div>

                <div>
                    <h3>Perche ogni creazione merita di essere protetta?</h3>

                    <p>
                        Le opere creative sono un bene prezioso: sono espressione di un lavoro intellettuale
                        che la legge tutela come ogni altro lavoro. Per questo esiste il diritto d’autore,
                        che nasce nel momento stesso in cui nasce l’opera.
                    </p>
                </div>

                <div>
                    <h3>Cosa puo fare l’autore avente questo diritto?</h3>

                    <div>
                        <p>
                            L’autore dell’opera dunque diventa titolare di un diritto che gli consente di:
                        </p>

                        <ul>
                            <li>
                                Rivendicare di essere autore dell’opera (diritto di paternità dell’opera),
                                ovvero decidere se renderla o meno pubblica (diritto di inedito), se
                                pubblicarla in maniera anonima (diritto di anonimo), se modificarla,
                                se ritirarla dal commercio. In questi casi si parla di esercizio del
                                diritto morale d’autore che è definito dall’articolo 2577, secondo
                                comma, c.c. Tale aspetto del diritto d’autore non è alienabile né
                                prescrittibile.<br /> Nella l.d.a il diritto morale d’autore trova ampio
                                spazio nella II sezione del Capo III del titolo I agli artt. 20-24.
                                In linea con il codice civile l’art. 20 l.d.a afferma che “…l’autore
                                conserva il diritto di rivendicare la paternità dell’opera e di opporsi
                                a qualsiasi deformazione, mutilazione od altra modificazione, ed a ogni
                                atto a danno dell’opera stessa, che possano essere di pregiudizio al
                                suo onore o alla sua reputazione”.
                            </li>

                            <li>
                                Sfruttare l’opera per ottenere un guadagno. Il primo comma dell’articolo
                                2577 c.c. infatti stabilisce che “L’autore ha il diritto esclusivo di
                                pubblicare l’opera e di utilizzarla economicamente in ogni forma e modo,
                                nei limiti e per gli effetti fissati dalla legge”. In linea a tale disposizione
                                si esprime anche la l.d.a. all’articolo 12, secondo comma. Si contrappone,
                                dunque, al diritto morale un diritto patrimoniale d’autore che a differenza
                                del primo, è alienabile e trasmissibile.
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3>Cosa sono le licenze software?</h3>

                    <div>
                        <p>
                            Una licenza software è un contratto tra l’autore o con il titolare dei diritti
                            e l’utilizzatore del programma per computer. Per utilizzare il software serve
                            acconsentire a una serie di termini e condizioni stabilito nella sue clausole,
                            cioè a un insieme d’autorizzazioni che uno sviluppatore può concedere a un’utente
                            che ha la capacità di distribuire, utilizzare e / o modificare il prodotto
                            con una licenza specifica.
                        </p>

                        <p>
                            In aggiunta, generalmente si definiscono i termini di durata, il territorio in cui
                            si applica la licenza (come la licenza è supportato da particolari leggi di ogni
                            paese o regione).
                        </p>
                    </div>
                </div>

                <div>
                    <h3>A che servono le licenze software? </h3>

                    <p>
                        Le licenze software in grado di stabilire, tra l’altro: l’assegnazione di
                        titolare determinati diritti per l’utente finale su uno o più copie del
                        software, i limiti di responsabilità per gli errori nel trasferimento dei
                        diritti, può anche stabilire anche il trasferimento e non del programma a
                        terzi, per la reinstallazione del programma su diversi computer a cui è
                        stato originariamente installato.
                    </p>
                </div>
            </section>

            <Footer nome="Della Marca Vittorio" />
        </div>
    )
}
