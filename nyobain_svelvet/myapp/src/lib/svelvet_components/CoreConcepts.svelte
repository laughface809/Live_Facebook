<script>
    import Svelvet from "svelvet";

    const initialNodes = [
      {
        id: 1,
        position: { x: 150, y: 50 },
        data: { label: "Landing Page" },
        width: 175,
        height: 40,
        bgColor: "white"
      },
      {
        id: 2,
        position: { x: 50, y: 150 },
        data: { label: "Register" },
        width: 150,
        height: 40,
        bgColor: "white"
      },
      {
        id: 3,
        position: { x: 300, y: 150 },
        data: { label: "Login" },
        width: 150,
        height: 40,
        bgColor: "white"
      },
      {
        id: 4,
        position: { x: 300, y: 250 },
        data: { label: "2-Step Verification" },
        width: 150,
        height: 40,
        bgColor: "white"
      },
      {
        id: 5,
        position: { x: 200, y: 350 },
        data: { label: "Account Page" },
        width: 150,
        height: 40,
        bgColor: "white"
      },
      {
        id: 6,
        position: { x: 400, y: 350 },
        data: { label: "Initialize purchase process" },
        width: 150,
        height: 50,
        bgColor: "white"
      },
      {
        id: 7,
        position: { x: 300, y: 450 },
        data: { label: "Finalize purchase" },
        width: 150,
        height: 50,
        bgColor: "#B8FFC6",
        borderColor: "#B8FFC6"
      },
      {
        id: 8,
        position: { x: 500, y: 450 },
        data: { label: "User Exits" },
        width: 150,
        height: 50,
        bgColor: "#FFB8B8",
        borderColor: "#FFB8B8"
      }
    ];

    const initialEdges = [
      { id: "e1-2", source: 1, target: 2 },
      { id: "e1-3", source: 1, target: 3, animate: true },
      { id: "e2-3", source: 2, target: 5 },
      { id: "e3-4", source: 3, target: 4, animate: true },
      { id: "e4-5", source: 4, target: 5 },
      { id: "e4-6", source: 4, target: 6, animate: true },
      { id: "e6-7", source: 6, target: 7, animate: true },
      { id: "e6-8", source: 6, target: 8 }
    ];
</script>

<Svelvet nodes={initialNodes} edges={initialEdges} width={800} height={800} background />
