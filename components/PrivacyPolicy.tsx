import React from 'react';
import LegalModal from './LegalModal';

interface Props { open: boolean; onClose: () => void; }

const PrivacyPolicy: React.FC<Props> = ({ open, onClose }) => (
  <LegalModal open={open} onClose={onClose} title="Politique de confidentialité">
    <p className="text-xs text-gray-500">Dernière mise à jour : 16 mai 2026</p>

    <h3 className="text-lg font-bold text-white mt-4">1. Responsable du traitement</h3>
    <p>
      Kevin Brunez, particulier, résidant à Montréal (Québec, Canada).
      Contact : <a href="mailto:brunezkevin@gmail.com" className="text-cyber-primary">brunezkevin@gmail.com</a>.
    </p>

    <h3 className="text-lg font-bold text-white mt-4">2. Données collectées</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li><strong>Formulaire de contact :</strong> nom, adresse email, sujet, contenu du message.</li>
      <li><strong>Chatbot IA :</strong> texte que vous saisissez librement. Ne saisissez aucune donnée sensible.</li>
      <li><strong>Données techniques :</strong> adresse IP (utilisée uniquement par notre hébergeur Netlify pour appliquer la limitation anti-abus du chatbot, conservée 24h).</li>
      <li><strong>Stockage local :</strong> nous utilisons <code>localStorage</code> (pas de cookies) pour mémoriser votre choix de consentement. Aucune donnée n'est transmise par ce biais.</li>
    </ul>

    <h3 className="text-lg font-bold text-white mt-4">3. Finalités et bases légales</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li><strong>Formulaire de contact :</strong> répondre à votre demande. Base : consentement (case à cocher) et exécution de mesures précontractuelles.</li>
      <li><strong>Chatbot IA :</strong> générer une réponse via l'API Google Gemini. Base : consentement explicite avant la première utilisation.</li>
      <li><strong>Limitation d'abus :</strong> prévenir les utilisations abusives du service. Base : intérêt légitime.</li>
    </ul>

    <h3 className="text-lg font-bold text-white mt-4">4. Destinataires et transferts hors Québec / hors UE</h3>
    <p>
      Vos données sont transmises aux sous-traitants suivants, qui peuvent les traiter en dehors du Québec et de l'Espace économique européen (États-Unis) :
    </p>
    <ul className="list-disc pl-6 space-y-1">
      <li><strong>Netlify, Inc.</strong> (États-Unis) — hébergement du site et traitement du formulaire de contact. <a href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer" className="text-cyber-primary">Politique Netlify</a>.</li>
      <li><strong>Google LLC</strong> (États-Unis) — API Gemini utilisée par le chatbot IA. <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-cyber-primary">Politique Google</a>. Selon les CGU de l'API Gemini, vos prompts peuvent être utilisés à des fins d'amélioration du modèle si vous utilisez l'offre gratuite.</li>
      <li><strong>fonts.bunny.net</strong> (Tchéquie / UE) — fourniture des polices d'écriture, sans tracking ni cookies.</li>
    </ul>
    <p>
      Conformément à la <strong>Loi 25 du Québec (art. 17)</strong>, nous avons évalué les risques liés à ces transferts.
      Sous le <strong>RGPD</strong>, les transferts vers les États-Unis s'appuient sur le Data Privacy Framework et/ou des clauses contractuelles types.
    </p>

    <h3 className="text-lg font-bold text-white mt-4">5. Durée de conservation</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Messages du formulaire de contact : <strong>12 mois maximum</strong> dans la messagerie de Kevin Brunez, puis suppression.</li>
      <li>Messages du chatbot : non conservés côté serveur (uniquement transmis à Google le temps de la requête).</li>
      <li>Compteur de limitation : 24 heures.</li>
    </ul>

    <h3 className="text-lg font-bold text-white mt-4">6. Vos droits</h3>
    <p>
      Conformément à la Loi 25 (Québec), au RGPD (UE) et à la LPRPDE (Canada), vous disposez des droits suivants :
    </p>
    <ul className="list-disc pl-6 space-y-1">
      <li>Droit d'accès, de rectification, d'effacement (« droit à l'oubli »).</li>
      <li>Droit à la portabilité et à la limitation du traitement.</li>
      <li>Droit de retirer votre consentement à tout moment.</li>
      <li>Droit d'introduire une plainte auprès de la <a href="https://www.cai.gouv.qc.ca/" target="_blank" rel="noreferrer" className="text-cyber-primary">Commission d'accès à l'information du Québec</a> ou de votre autorité nationale (CNIL en France).</li>
    </ul>
    <p>Pour exercer ces droits : <a href="mailto:brunezkevin@gmail.com" className="text-cyber-primary">brunezkevin@gmail.com</a>.</p>

    <h3 className="text-lg font-bold text-white mt-4">7. Sécurité</h3>
    <p>
      Toutes les communications sont chiffrées (HTTPS/TLS). La clé d'API du chatbot reste côté serveur et n'est jamais exposée au navigateur.
    </p>

    <h3 className="text-lg font-bold text-white mt-4">8. Modifications</h3>
    <p>
      Cette politique peut être mise à jour ; la date en haut de page reflète la dernière modification.
    </p>
  </LegalModal>
);

export default PrivacyPolicy;
