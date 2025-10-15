type Props = {
  title: string;
};

const Component = ({ title }: Props) => {
  return (
    <div>
      <h1>Welcome to Rocket Pet!</h1>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <h1>Welcome to Rocket Pet!</h1>

      <Component title={2} />
    </div>
  );
}
