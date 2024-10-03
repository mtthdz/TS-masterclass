interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  // alt 3: const data: LukeSkywalker
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  /**
   * const matt = {} as LukeSkywalker
   * -> this will auto assign return to LukeSkywalker for promise fn
   * -> safer, better to use this. It's more manual but alt 2 will mean
   *    anyone/anything can become LukeSkywalker
   */

  return data;
  // alt 2: return data as LukeSkywalker, which is a "cast"
};
