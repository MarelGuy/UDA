import Footer from '../Components/Footer'
import React from 'react'

export default function SistemiReti() {
    return (
        <div>
            <h1 className="text-center">Sistemi e reti</h1>

            <section>
                <div>
                    <h3>Che cos’è il modello Tcp/Ip?</h3>

                    <p>
                        Il protocollo TCP/IP indica l'uso combinato di due protocolli per
                        la trasmissione di dati su internet.
                    </p>
                </div>

                <div>
                    <h3>L’architettura del modello TCP/IP </h3>

                    <p>
                        Oltre all’architettura iso osi abbiamo anche il tcp ip, essa non
                        è altro che un’architettura sempre basata sull’Iso osi, formata da
                        4 livelli che dovrebbero corrispondere a quelle dell’osi ma la
                        differenza sostanziale è che i protocolli del tcp ip sono autonomi
                        e possono essere usato in base alle necessità. <br />
                        Il primo livello è il livello fisico: questo livello praticamente
                        ha incorporato le funzioni dei primi 3 livelli dell’osi inoltre
                        permette di utilizzare risorse di rete diverse tra loro. <br />
                        Il secondo livello ovvero il network layer: questo livello permette
                        l’instradamento dei pacchetti nella rete e gestisce la connessione.<br />
                        Il terzo livello è il livello di trasporto: chiamato anche tcp, esso
                        permette di gestire le connessioni a livello end to end ovvero da
                        mittente a destinatario, praticamente corrisponde al livello trasport
                        dell’iso. <br /> Application layer: corrisponde praticamente agli
                        ultimi 3 livelli dell’iso ovvero applicazione presentazione e sessione.
                        <br /> Negli anni sono state fatte varie versioni del modello tcp/ip,
                        abbiamo la versione 4 con classi di indirizzi a 32 bit, abbiamo al
                        versione 5 basatasi sul modello osi ma che non è mai stata approvata,
                        e la versione 6 che utilizza per lo strato network indirizzi a 128 bit.
                        <br />
                    </p>
                </div>

                <div>
                    <h3>A che cosa serve il modello TCP/IP?</h3>

                    <p>
                        Il protocollo TCP crea la connessione tra due host e gestisce la consegna
                        dei pacchetti da un sistema all’altro, mentre il protocollo IP fornisce
                        le istruzioni per il trasferimento dei dati.
                    </p>
                </div>
            </section>

            <Footer nome="Romano Cristian" />
        </div>
    )
}
