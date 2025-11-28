import { useState } from "react";
import styles from "../styles/BlogPost.module.css";

const BlogPost = ({ blog }) => {
  // Return = Enter HTML
  return (
    <article className={styles.article}>
      <p className={styles.p}>
        Alle har jo hemmeligheder Det ligemeget hvilket alder du er hvem du er
        eller hvilket tidspunkt du er i livet, vi har alle et hemmelighed eller
        to vi gemmer skjult bag lukket døre, jeg glæder mig til at introducere
        mange af jer læser til min egen forståelse af hemmeligheder, jeg håber i
        kan få noget ud af mine historier. Jeg vil selv sige at jeg har mange
        erfaringer med at holde hemmeligheder, jeg er en gammel mand på 60 nu
        men gennem mit liv har jeg holdt på hemmeligheder jeg stolt over og
        noget som jeg ikke holder meget af på nuværende tidspunkt. Jeg kan nemt
        huske det, da jeg var lidt yngre i mit folkeskole liv var jeg en af de
        drenge der blev betragtet som populær, jeg havde en masse relationer med
        mennesker som jeg ikke kendt godt til men var sammen med dem bare fordi
        det var sådan det fungerede, det at jeg havde så mange øjne på mig havde
        både fordele og ulemper der gik med, det var altid hyggeligt at have så
        mange omkring sig men der var også mange gange jeg skulle bare være et
        støtte for andre som endeligt bare brugte mig, det der hvor jeg endeligt
        for første gang følte hvor vigtigt det var at holde noget hemmeligt, der
        var så mange der kom ud med det de havde på hjertet i løbet af mine
        skoleår at det er ikke til at tælle. Det var meget pres jeg følte på mig
        selv, altså at vide så meget om andre, det var næsten ikke til at
        håndtere men årene gik og jeg så ikke rigtigt mange af mine gamle
        kammerater igen, jo ældre jeg blev. Stadig kan jeg huske mange
        situationer hvor jeg var presset til at sige noget om denne person eller
        måske om hende, det føltes bare så mærkeligt og fik mig til at forstå
        hvor vigtigt det endeligt er at holde et hemmelighed hemmeligt.
      </p>
    </article>
  );
};

export default BlogPost;
