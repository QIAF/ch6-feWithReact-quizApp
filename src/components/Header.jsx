import logoImg from '../assets/quiz-logo.png';

export default function Header (){
    return (
        <header className="header">
            <img src={logoImg} />
            <h1>Quizz APP QIAF</h1>
        </header>
    );
}
