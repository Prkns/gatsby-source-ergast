const axios = require("axios");

/*
 * What data does this plugin request?
 * 1. Next Race Details
 * 2. Last Race Details
 * 3. Current Season Race Calendar
 * 4. Drivers Championship Standings
 * 5. Drivers Details
 * 6. Constructors Championship Standings
 *
 * TODO:
 * - Constructors Details
 * - Qualifying Details
 * - Previous seasons data
 */

exports.onPreInit = () => console.log(`🎉 loaded gatsby-source-ergast 🏎`);

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;
  const baseEndPoint = "http://ergast.com/api/f1";

  /*
   * 1. Next Race Details
   * @nodesCreated nextRace/allNextRace
   */
  const { data: nextRace } = await axios.get(
    `${baseEndPoint}/current/next.json`
  );
  nextRace.MRData.RaceTable.Races.map(async (nextRace) => {
    const nodeContent = JSON.stringify(nextRace);
    const nodeMeta = {
      id: createNodeId(`f1-next-${nextRace.round}`),
      parent: null,
      children: [],
      internal: {
        type: `NextRace`,
        content: nodeContent,
        contentDigest: createContentDigest(nextRace),
      },
    };
    const node = Object.assign({}, nextRace, nodeMeta);
    createNode(node);
  });

  /*
   * 2. Last Race Details
   * @nodesCreated lastRace/allLastRace
   */
  const { data: lastRace } = await axios.get(
    `${baseEndPoint}/current/last/results.json`
  );
  lastRace.MRData.RaceTable.Races.map(async (lastRace) => {
    const nodeContent = JSON.stringify(lastRace);
    const nodeMeta = {
      id: createNodeId(`f1-next-${lastRace.round}`),
      parent: null,
      children: [],
      internal: {
        type: `LastRace`,
        content: nodeContent,
        contentDigest: createContentDigest(lastRace),
      },
    };
    const node = Object.assign({}, lastRace, nodeMeta);
    createNode(node);
  });

  /*
   * 3. Current Season Race Calendar
   * @nodesCreated calendar/allCalendar
   */
  const { data: calendar } = await axios.get(`${baseEndPoint}/2021.json`);
  calendar.MRData.RaceTable.Races.map(async (race) => {
    const nodeContent = JSON.stringify(race);
    const nodeMeta = {
      id: createNodeId(`f1-calendar-${race.round}`),
      parent: null,
      children: [],
      internal: {
        type: `Calendar`,
        content: nodeContent,
        contentDigest: createContentDigest(race),
      },
    };
    const node = Object.assign({}, race, nodeMeta);
    createNode(node);
  });

  /*
   * 4. Drivers Championship Standings
   * @nodesCreated driverStanding/allDriverStanding
   */
  const { data: driverStandings } = await axios.get(
    `${baseEndPoint}/2021/driverStandings.json`
  );
  driverStandings.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(
    async (driverStanding) => {
      const nodeContent = JSON.stringify(driverStanding);
      const nodeMeta = {
        id: createNodeId(`f1-driverStanding-${driverStanding.position}`),
        parent: null,
        children: [],
        internal: {
          type: `DriverStanding`,
          content: nodeContent,
          contentDigest: createContentDigest(driverStanding),
        },
      };
      const node = Object.assign({}, driverStanding, nodeMeta);
      createNode(node);
    }
  );

  /*
   * 5. Driver Details
   * @nodesCreated driver/allDriver
   */
  const { data: drivers } = await axios.get(
    `${baseEndPoint}/2021/drivers.json`
  );
  drivers.MRData.DriverTable.Drivers.map(async (driver) => {
    const nodeContent = JSON.stringify(driver);
    const nodeMeta = {
      id: createNodeId(`f1-drivers-${driver.driverId}`),
      parent: null,
      children: [],
      internal: {
        type: `Driver`,
        content: nodeContent,
        contentDigest: createContentDigest(driver),
      },
    };
    const node = Object.assign({}, driver, nodeMeta);
    createNode(node);
  });

  /*
   * 6. Constructors Championship Standings
   * @nodesCreated constructor/allConstructor
   */
  const { data: constructors } = await axios.get(
    `${baseEndPoint}/2021/constructorStandings.json`
  );
  constructors.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(
    async (constructorStanding) => {
      const nodeContent = JSON.stringify(constructorStanding);
      const nodeMeta = {
        id: createNodeId(`f1-constructors-${constructorStanding.position}`),
        parent: null,
        children: [],
        internal: {
          type: `ConstructorStanding`,
          content: nodeContent,
          contentDigest: createContentDigest(constructorStanding),
        },
      };
      const node = Object.assign({}, constructorStanding, nodeMeta);
      createNode(node);
    }
  );
};
