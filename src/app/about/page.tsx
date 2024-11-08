"use client"; // This is required for client-side hooks like `useState`, etc.

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-white">About Me</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Hi, I'm Lezgin Alimoglu</h2>
        <p className="text-lg text-white">
        I am a student studying electrical and electronics engineering and a passionate 
        software developer who loves to build new things. Learning new things from many 
        areas and making new discoveries are indispensable for me. I created this site 
        to share the new things I learn with the adventurers who explore the farthest 
        reaches of the internet.
        </p>
        <p className="text-lg text-white mt-4">
          With a background in C++ development, I am currently focusing on building 
          my own small projects. My goal is to create effective software that solves 
          real-world problems.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Skills & Technologies</h2>
        <ul className="list-disc list-inside text-lg text-white">
          <li>🖥️ Full-stack development</li>
          <li>🛠️ C++ Development</li>
          <li>🔧 Git, GitHub, and version control</li>
          <li>🤖 Robotic Locomotion & control</li>
          <li>🔍 Problem-solving with algorithms</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Projects</h2>
        <p className="text-lg text-white">
          I have worked on several personal and professional projects. Some of
          them include:
        </p>
        <ul className="list-disc list-inside text-lg text-white mt-4">
          <li>📱 A Sudoku Solver app built with C++ (backend) and Python (GUI)</li>
          <li>🌐 A responsive Next.js portfolio site</li>
          <li>💻 A dynamic blog site built with Next.js 15</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">Let's Connect</h2>
        <p className="text-lg text-white">
          You can find me on{" "}
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>{" "}
          or check out my code on{" "}
          <a
            href="https://github.com/your-github"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
