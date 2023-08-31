const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'cyan',
    'purple',
    'pink',
  ];
  
  export function swap<T>(arr: T[], i: number, j: number): T[] {
    const copy = [...arr];
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
    return copy;
  }
  
  const randomColors: string[] = [
    'rgba(255,183,208, 255)',
    'rgba(255,239,185, 255)',
    'rgba(209,245,255, 255)',
    'rgba(222,255,203, 255)'
   
  ];
  export function pickChakraRandomColor() {
    const randomIndex = Math.floor(Math.random() * randomColors.length);

    const color = randomColors[randomIndex]
    return color ;
  }