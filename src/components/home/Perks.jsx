import Icon from '../common/Icon.jsx';

const PERKS = [
  ['ship', 'Free shipping', 'On orders over $1,000'],
  ['box', 'Wholesale packs', 'Cases, displays and singles'],
  ['tag', 'Live stock counts', "See what's on hand before you order"],
  ['lock', 'Pay on invoice', 'Or by card after confirmation'],
];

export default function Perks() {
  return (
    <div className="perks">
      {PERKS.map(([icon, title, text]) => (
        <div className="perk" key={title}>
          <i><Icon name={icon} /></i>
          <div><b>{title}</b><span>{text}</span></div>
        </div>
      ))}
    </div>
  );
}
