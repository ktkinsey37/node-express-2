const {timeWord, timeWordMinutes} = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('edge cases', () => {
    const midnight = timeWord("00:00")
    expect(midnight).toBe("midnight")

    const noon = timeWord("12:00")
    expect(noon).toBe("noon")
  })

  test('standard cases', () => {
    const time1 = timeWord("00:12")
    expect(time1).toBe("twelve twelve am")

    const time2 = timeWord("01:00")
    expect(time2).toBe("one o'clock am")

    const time3 = timeWord("06:01")
    expect(time3).toBe("six oh one am")

    const time4 = timeWord("06:10")
    expect(time4).toBe("six ten am")

    const time5 = timeWord("06:18")
    expect(time5).toBe("six eighteen am")

    const time6 = timeWord("06:30")
    expect(time6).toBe("six thirty am")

    const time7 = timeWord("10:34")
    expect(time7).toBe("ten thirty four am")

    const time8 = timeWord("12:09")
    expect(time8).toBe("twelve oh nine pm")

    const time9 = timeWord("23:23")
    expect(time9).toBe("eleven twenty three pm")
  })
});