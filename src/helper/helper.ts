interface Attributes {
  type: {
    name: string
  }
}

export function setBackgroundColor(types: Attributes[]) {
  let backgroundColorCard = {
    colorCard: "bg-red-200",
    colorAttributes: "#FB8381"
  }

  types.map( obj_type => {
    const { type } = obj_type;
    
    if( type.name === "fire" ) {
      backgroundColorCard = {
        colorCard: "#F6776B",
        colorAttributes: "#FB8381"
      }

      return;
      
    } else if( type.name === "water" ) {
      backgroundColorCard = {
        colorCard: "#58AAF6",
        colorAttributes: "#81BDF3"
      }

      return;

    } else if( type.name === "grass" ) {
      backgroundColorCard = {
        colorCard: "#2CDBB0",
        colorAttributes: "#63D6BA"
      }

      return;

    }  else if( type.name === "bug" ) {
      backgroundColorCard = {
        colorCard: "#32DBB1",
        colorAttributes: "#59E3C3"
      }

      return;
    
    }  else if( type.name === "normal" ) {
      backgroundColorCard = {
        colorCard: "#B5BBC4",
        colorAttributes: "#C0C5CD"
      }

      return;

    }  else if( type.name === "electric" ) {
      backgroundColorCard = {
        colorCard: "#FFD96D",
        colorAttributes: "#FFDF85"
      }

      return;
      
    } else if( type.name === "ice" ) {
      backgroundColorCard = {
        colorCard: "#3BDBE9",
        colorAttributes: "#08B5C7"
      }

      return;
    }
    
  });

  return backgroundColorCard;
}

export function padLeft(word: any, totalPad: number, charReplace: string) {
  const text = typeof word !== "string" ? String(word) : word;
  return text.padStart(totalPad, charReplace);
}