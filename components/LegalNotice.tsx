import React from 'react';
import LegalModal from './LegalModal';

interface Props { open: boolean; onClose: () => void; }

const LegalNotice: React.FC<Props> = ({ open, onClose }) => (
  <LegalModal open={open} onClose={onClose} title="Mentions légales">
    <h3 className="text-lg font-bold text-white">Éditeur du site</h3>
    <p>
      Kevin Brunez<br />
      Particulier (non commerçant)<br />
      Montréal, Québec, Canada<br />
      Email : <a href="mailto:contact@kevinbrunez.dev" className="text-cyber-primary">contact@kevinbrunez.dev</a>
    </p>

    <h3 className="text-lg font-bold text-white mt-4">Directeur de la publication</h3>
    <p>Kevin Brunez</p>

    <h3 className="text-lg font-bold text-white mt-4">Hébergeur</h3>
    <p>
      Netlify, Inc.<br />
      512 2nd Street, Suite 200<br />
      San Francisco, CA 94107, États-Unis<br />
      <a href="https://www.netlify.com/" target="_blank" rel="noreferrer" className="text-cyber-primary">www.netlify.com</a>
    </p>

    <h3 className="text-lg font-bold text-white mt-4">Propriété intellectuelle</h3>
    <p>
      L'ensemble du contenu de ce site (textes, images, code source, design) est la propriété de Kevin Brunez,
      sauf mention contraire. Toute reproduction ou utilisation sans autorisation écrite préalable est interdite.
      Les marques, logos et noms de produits mentionnés appartiennent à leurs propriétaires respectifs.
    </p>

    <h3 className="text-lg font-bold text-white mt-4">Code source</h3>
    <p>
      Le code source de ce portfolio est public sur GitHub :{" "}
      <a href="https://github.com/ketve76/KBfoliopro" target="_blank" rel="noreferrer" className="text-cyber-primary">
        github.com/ketve76/KBfoliopro
      </a>.
    </p>

    <h3 className="text-lg font-bold text-white mt-4">Limitation de responsabilité</h3>
    <p>
      Les informations présentées sur ce site sont fournies à titre indicatif. L'assistant IA peut produire
      des réponses imprécises ou incorrectes ; elles ne constituent ni un avis professionnel, ni un conseil
      financier, juridique ou technique engageant.
    </p>

    <h3 className="text-lg font-bold text-white mt-4">Droit applicable</h3>
    <p>
      Le présent site est soumis aux lois en vigueur au Québec (Canada). Tout litige relève des tribunaux
      compétents du district judiciaire de Montréal.
    </p>
  </LegalModal>
);

export default LegalNotice;
