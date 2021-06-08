const MainLayout = props => {
  return (
    <>
      <main className="container mx-auto px-4">
        {props.children}
      </main>
    </>
  );
};

export default MainLayout;
