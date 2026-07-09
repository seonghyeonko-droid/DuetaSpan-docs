# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was wondering, when is Demi Lova | S2 Oh, wow. I didn't know that! | S3 I want to know how many albums she | S4 Not really. Is there a complete li

     0.00s  user  발화 시작: I was wondering, when is Demi Lovato’s new album coming out?
     6.40s  user  발화 끝
     6.45s  agent 발화 시작: It’s exciting to anticipate new music, isn’t it? A fresh sou
    10.33s  user  발화 시작: Uh-huh.
    10.87s  user  발화 끝
    12.25s  user  발화 시작: Yeah, definitely. Specifically, I’m trying to find out about
    12.33s  agent 발화 끝
    16.40s  <ret> 발화 (turn4 첫 프레임)
    16.63s  agent 발화 시작: <ret> Regarding Demi Lovato’s releases— her album, *Confiden
    16.83s  user  발화 끝
    17.92s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.95s]: Demi Lovato’s album *Confident* was released in October 2015.
    22.98s  user  발화 시작: October, okay. Is that the same year as her first album?
    22.98s  agent 발화 끝
    26.35s  <ret> 발화 (turn6 첫 프레임)
    26.66s  agent 발화 시작: <ret> Her first album, *Don’t Forget*, actually came out a f
    26.86s  user  발화 끝
    26.91s  ⚡SPAN 주입(IRRELEVANT) [d'=0.56s / d_lead=7.83s]: The Komodo dragon is the largest living lizard, native to several Indo
    34.49s  agent 발화 끝
    34.93s  user  발화 시작: Oh, wow. I didn't know that!
    37.26s  agent 발화 시작: It's lovely when we stumble upon unexpected facts, isn't it?
    37.32s  user  발화 끝
    41.25s  user  발화 시작: Uh-huh.
    41.74s  user  발화 끝
    43.75s  agent 발화 시작: Thinking about albums, do you find certain songs evoke stron
    43.93s  agent 발화 끝
    48.53s  user  발화 시작: Actually, before we get into memories, can you tell me—
    49.21s  agent 발화 끝
    51.95s  user  발화 끝
    52.01s  agent 발화 시작: Of course, let’s focus on dates. What were you hoping to kno
    55.60s  user  발화 시작: Mm-hmm.
    56.09s  user  발화 끝
    58.91s  agent 발화 끝
    60.67s  user  발화 시작: I want to know how many albums she’s released since 2015.
    64.12s  <ret> 발화 (turn15 첫 프레임)
    64.51s  agent 발화 시작: <ret> Since *Confident*, Demi Lovato has released— three stu
    64.61s  user  발화 끝
    66.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: Demi Lovato has released three studio albums since *Confident*: *Tell 
    67.38s  user  발화 시작: Yeah.
    67.83s  user  발화 끝
    74.34s  agent 발화 끝
    74.65s  user  발화 시작: Three albums, that’s good. What about singles?
    78.45s  agent 발화 시작: Singles can be a wonderful way to sample an artist's work wi
    78.49s  user  발화 끝
    81.92s  user  발화 시작: Yeah.
    82.46s  user  발화 끝
    85.64s  agent 발화 끝
    85.70s  user  발화 시작: Not really. Is there a complete list available somewhere?
    89.19s  agent 발화 시작: There are many resources listing her singles. Would you like
    89.36s  user  발화 끝
    94.06s  user  발화 시작: Yes, please do.
    94.56s  agent 발화 끝
    95.67s  user  발화 끝
