const { ActivityType } = require("discord.js");
const User = require("../../../settings/models/User.js");

module.exports.run = async (client) => {
    await client.poru.init(client, {
        shards: client.cluster.info.TOTAL_SHARDS,
        clientName: client.user.username,
        clientId: client.user.id,
    });

    const users = await User.find();

    for (const user of users) {
        client.premium.set(user.id, user);
    }

    client.user.setActivity("Raffi", { type: ActivityType.Listening });
    client.user.setStatus("dnd");
};
