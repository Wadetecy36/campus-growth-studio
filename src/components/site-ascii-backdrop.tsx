const ASCII_FIELD = `
      .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @
   ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·
 .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·
   :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :
      +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :
 .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·
   ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·
 .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·
      .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @
   ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·
 .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·
   :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :
      +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :
 .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·
   ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·
 .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·  :  +  *  #  @  .  ·`;

const ASCII_ROWS = ASCII_FIELD.split("\n");
const REPEATED_ASCII_FIELD = Array.from({ length: 72 }, (_, index) => ASCII_ROWS[index % ASCII_ROWS.length]).join("\n");

export function SiteAsciiBackdrop() {
  return (
    <div className="site-ascii-backdrop" aria-hidden="true">
      <pre className="site-ascii-layer site-ascii-layer-light">{REPEATED_ASCII_FIELD}</pre>
      <pre className="site-ascii-layer site-ascii-layer-dark">{REPEATED_ASCII_FIELD}</pre>
    </div>
  );
}
