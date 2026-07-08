# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hi moshi, how are you doing today?
     2.58s  agent 발화 시작: Oh, hello there! I’m doing quite well, thank you for asking.
     2.58s  user  발화 끝
    10.71s  user  발화 시작: That’s nice. Um, can you tell me who runs the train station 
    10.71s  agent 발화 끝
    15.88s  agent 발화 시작: <ret> Let me see… it’s managed by Northern. They operate a l
    15.88s  <ret> 발화 (turn3 첫 프레임)
    15.88s  user  발화 끝
    16.88s  ⚡SPAN 주입 [d'=1.00s / d_lead=7.38s]: Northern operates the station, providing train services to destination
    23.26s  user  발화 시작: Mm-hmm.
    23.26s  agent 발화 끝
    23.63s  user  발화 시작: Northern? Really? I thought it was TransPennine Express.
    23.63s  user  발화 끝
    26.58s  agent 발화 시작: That’s understandable, they do have a presence in Lancashire
    26.58s  user  발화 끝
    34.70s  user  발화 시작: Huh. Okay. What about the population of Colne? Do you know t
    34.70s  agent 발화 끝
    39.50s  agent 발화 시작: <ret> Actually, yes. As of two thousand and eleven, the popu
    39.50s  <ret> 발화 (turn8 첫 프레임)
    39.50s  user  발화 끝
    39.74s  ⚡SPAN 주입 [d'=0.24s / d_lead=6.65s]: In 2011, the population of Colne was recorded at 8,200 during the Unit
    46.15s  user  발화 시작: Two thousand and eleven? That’s… pretty old data, isn’t it? 
    46.15s  agent 발화 끝
    51.32s  agent 발화 시작: [chuckle] You are absolutely right to question that. Populat
    51.32s  user  발화 끝
    60.55s  user  발화 시작: So you can’t give me a more up-to-date number?
    60.55s  agent 발화 끝
    63.87s  agent 발화 시작: <ret> I can certainly look for more recent estimates, but it
    63.87s  <ret> 발화 (turn12 첫 프레임)
    63.87s  user  발화 끝
    64.87s  ⚡SPAN 주입 [d'=1.00s / d_lead=7.38s]: The estimated population of Colne in mid-2021 was 9,149, showing an in
    71.26s  user  발화 시작: Nine thousand one hundred and forty-nine. That sounds more l
    71.26s  agent 발화 끝
    77.53s  agent 발화 시작: Compared to a city, no, it’s relatively small. It’s consider
    77.53s  user  발화 끝
    85.65s  user  발화 시작: Borough of Pendle… what’s that?
    85.65s  agent 발화 끝
    87.50s  agent 발화 시작: It’s a local government district in Lancashire. It covers a 
    87.50s  user  발화 끝
    97.10s  user  발화 시작: Oh. So, it’s like a county?
    97.10s  agent 발화 끝
    99.31s  agent 발화 시작: Not exactly. A county is a historical division, whereas a bo
    99.31s  user  발화 끝
   111.13s  user  발화 시작: Right, okay. Makes sense. You know, this is actually useful.
   111.13s  agent 발화 끝
   117.04s  agent 발화 시작: Oh, how wonderful! Are you interested in coastal areas, perh
   117.04s  user  발화 끝
   125.53s  user  발화 시작: Maybe later. What’s the weather like in Colne right now?
   125.53s  agent 발화 끝
   129.22s  agent 발화 시작: <ret> Let me check the current conditions… it appears to be 
   129.22s  <ret> 발화 (turn22 첫 프레임)
   129.22s  user  발화 끝
   130.22s  ⚡SPAN 주입 [d'=1.00s / d_lead=9.60s]: Current conditions in Colne show partly cloudy skies, a temperature of
   138.82s  user  발화 시작: Fourteen degrees… that’s a bit chilly.
   138.82s  agent 발화 끝
   141.03s  agent 발화 시작: Yes, it is a bit cool. Definitely a day for a warm coat if y
   141.03s  user  발화 끝
   151.37s  user  발화 시작: You’re probably right. Thanks for the information, moshi.
   151.37s  agent 발화 끝
   154.32s  agent 발화 시작: You’re very welcome! I’m glad I could assist you with your t
   154.32s  user  발화 끝
   160.60s  agent 발화 끝
