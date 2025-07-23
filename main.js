const stories = [
    name => `One sunny morning, ${name} discovered a talking tree in their backyard. The tree insisted on being called "Sir Leafington" and demanded tea every afternoon. From that day, ${name}'s backyard was the most posh place in the neighborhood.`,
    name => `${name} accidentally invented a new dance move called "The Worm Tornado" while trying to get chewing gum off their shoe. It became so popular that squirrels started copying it in the park.`,
    name => `While walking their goldfish in a bowl-shaped backpack, ${name} slipped on a banana peel and was applauded by a flash mob that thought it was a performance. ${name} now performs monthly at the mall.`,
    name => `${name} found a button labeled "Do Not Press" in the middle of the street. Of course, they pressed it. Suddenly, pigeons everywhere started wearing tiny top hats and singing opera.`,
    name => `When ${name} spilled orange juice on their homework, it magically turned into a treasure map. Following it, ${name} found a buried chest filled with glitter, rubber ducks, and old pizza coupons.`,
    name => `One day, ${name} sneezed so hard that it created a small tornado in their kitchen. The tornado rearranged all the furniture—and somehow baked a perfect cake in the process.`,
    name => `At the zoo, ${name} tripped and fell into the llama pen. The llamas declared ${name} their leader, crowned them with a straw hat, and they paraded around the zoo together.`,
    name => `${name} built a robot to do their homework, but it misunderstood the assignment and made a sculpture of spaghetti instead. The teacher gave it an A+ for "abstract thinking".`,
    name => `${name} once mistook shampoo for whipped cream while cooking. The pancakes were a disaster, but somehow the dog grew shiny, silky fur overnight.`,
    name => `When ${name} visited a haunted house, they weren’t scared at all. In fact, they ended up playing chess with a bored ghost who just wanted a friend and some marshmallows.`,
    name => `${name} tried to invent a teleportation device using a microwave and two spoons. It didn’t work—but it did make the microwave dance to disco music for 10 minutes.`,
    name => `${name} started a rock band made entirely of cats. They were called "The Purr-formers" and their hit song was “Meowgical Dreams.”`,
    name => `After tripping over a garden gnome, ${name} discovered a tiny civilization of ants who believed ${name} was their long-lost giant ruler. A tiny crown was immediately made out of popcorn.`,
    name => `${name} painted their room with glow-in-the-dark paint. At night, it glowed so brightly that planes started mistaking it for a runway.`,
    name => `While practicing karate, ${name} accidentally high-kicked their cereal bowl onto the ceiling. It stayed there so long that it was declared a modern art piece.`
];

const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const storyLabel = document.getElementById("storyLabel");
const nameInput = document.getElementById("nameInput");

generateBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (!name) {
        storyLabel.textContent = "Please enter your name first!";
        storyLabel.classList.remove("hidden");
        return;
    }

    const randomIndex = Math.floor(Math.random() * stories.length);
    const story = stories[randomIndex](name);
    storyLabel.textContent = story;
    storyLabel.classList.remove("hidden");
});

clearBtn.addEventListener("click", () => {
    nameInput.value = '';
    storyLabel.textContent = '';
    storyLabel.classList.add("hidden");
});
