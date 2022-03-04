import Link from "next/link";
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header className="header">
        <Link href="/" passHref>
          <a>
            <strong>Home</strong>{" "}
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
