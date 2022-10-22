import style from "./loader.module.css";

export default function Loader({ request }) {
  return (
    <div>
      {request === false ? (
        <div className={style.mensaje}>La ciudad no existe</div>
      ) : (
        <div className={style.container}>
          <div className={style.load}>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}
