import Layout from "@/features/layout";

export default function Home() {
  return (
    <Layout>
      <div className="container md:1/2 mx-auto my-8">
        <h1>Hello world, and happy hacking!</h1>
        <p>
          Today I will show you how I use a combination of NextJS, Tailwind,
          HeroIcons, and HeadlessUI to build a dark theme switcher!
        </p>
      </div>
    </Layout>
  );
}
