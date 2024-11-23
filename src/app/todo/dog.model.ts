
export interface Dog {
    id: string;
    type: string;
    attributes: {
        name: string;
        description: string;
        life: {
        max: number;
        min: number;
        };
        maleWeight: {
        max: number;
        min: number;
        };
        femaleWeight: {
        max: number;
        min: number;
        };
        hypoallergenic: boolean;
    };
    relationships: {
        group: {
        data: {
            id: string;
            type: string;
        };
        };
    };
  }