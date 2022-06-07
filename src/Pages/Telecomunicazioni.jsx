import React from 'react'
import Footer from '../Components/Footer'

export default function Telecomunicazioni() {
    return (
        <div>
            <h1 className='text-center'>Telecomunicazioni</h1>

            <section>
                <div>
                    <h3>Regole per la comunicazione: cosa sono i protocolli di rete?</h3>

                    <p>
                        Un gruppo di protocolli correlati necessari per effettuare la+
                        comunicazione è detto suite di protocolli. Le suite di protocolli
                        sono implementate dagli hoste dai device di rete in hardware o
                        in software, o in entrambi i modi. Uno dei modi per capire come
                        interagiscono i protocolli di una suite, consiste nel visualizzarli
                        come uno stack. In questo caso i protocolli sono visti come strati. <br />
                        Ogni servizio offerto da uno strato superiore, dipende dalle funzionalità
                        definite dai protocolli presenti nello strato inferiore. I livelli più
                        bassi dello stack si occupano di movimentarei dati nella rete e di
                        fornire servizi ai livelli superiori. Questo sono invece orientati
                        sulla composizione del contenuto che deve essere inviato. Protocolli di
                        rete. Nel caso di persone, le regole della comunicazione sono in parte
                        formali e in parte definite dalle usanze (informali). Nel caso di
                        computer le regole di comunicazione (protocol suite) devono descrivere
                        con precisione i requisiti e le interazioni. I protocolli di rete
                        definiscono i formati e l’insieme delle regole per lo scambio
                        dei messaggi tra device. Alcuni esempi sono HTTP, TCP. IP 2.
                    </p>
                </div>

                <div>
                    <h3>I protocolli definiscono:</h3>

                    <ul>
                        <li>
                            Come sono formattati i messaggi (IP header | data);
                        </li>

                        <li>
                            Come i device di rete condividono le informazioni riguardo i percorsi verso
                            altre reti;
                        </li>

                        <li>
                            Come e quando errori e messaggi di sistema vengono scambiati tra device;
                        </li>

                        <li>
                            L’avvio e la terminazione di sessioni per il trasferimento dati.
                        </li>

                        <li>
                            Interazioni tra protocolli Un esempio di interazione tra diversi protocolli
                            è la comunicazione tra un client e un server web. Sono cinvolti i seguenti:

                            <ul>
                                <li>
                                    HTTP, protocollo applicativo che definisce come interagiscono client
                                    e web server. Definisce i contenuti e la formattazione di richieste
                                    e risposte scambiate tra client e server. HTTP si appoggia ai protocolli
                                    che governano il trasporto dei messaggi tra client e server.
                                </li>

                                <li>
                                    TCP è il protocoolo di trasporto. Gestisce le comunicazioni individuali.
                                    Segmenta i messaggi HTTP, controlla la loro dimensione e la velocità
                                    con cui sono scambiati tra client e server.
                                </li>

                                <li>
                                    IP è responsabile dell’incaspulamento dei segmenti TCP in pacchetti,
                                    assegna gli indirizzi opportuni e li consegna all’host di destinazione.
                                </li>

                                <li>
                                    Ethernet è il protocollo di accesso alla rete. Descrive principalmente
                                    due funzioni: la comunicazione su un data link, e la trasmissione fisica
                                    dei dati sul mezzo di comunicazione. È responsabile della trasformazione
                                    dei pacchetti IP nel formato compatibile con la trasmissione sul media.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>

            <Footer nome="Della Marca Vittorio" />
        </div>
    )
}
