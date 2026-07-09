# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 My Love, My Life"를 누가 썼는지 아세요? | S2 그렇군요. 그럼 ABBA 노래랑 이 *Chess* 뮤지컬 곡도 | S3 정말 대단하시네요. 다른 뮤지컬 작품도 하셨나요? | S4 아, 그럼 주로 스웨덴에서 공연하는군요?

     0.00s  user  발화 시작: My Love, My Life"를 누가 썼는지 아세요?
     2.67s  <ret> 발화 (turn1 첫 프레임)
     2.83s  agent 발화 시작: <ret> 네, 좋은 질문이세요. “My Love, My Life”는 원래 뮤지컬 *Chess*를 위해 비외
     3.00s  user  발화 끝
     4.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.87s]: Björn Ulvaeus wrote “My Love, My Life” as part of the musical *Chess*.
    11.49s  user  발화 시작: 아, *Chess*요! 들어본 적이 없네요. 혹시 그분도 ABBA 멤버셨나요?
    11.49s  agent 발화 끝
    17.00s  user  발화 끝
    17.04s  agent 발화 시작: 네, 맞습니다! 비외른 울바에우스 님은 베니 앤더슨 님과 함께 ABBA의 창립 멤버셨습니다.
    19.71s  user  발화 시작: 네.
    20.35s  user  발화 끝
    23.39s  agent 발화 끝
    23.98s  user  발화 시작: 그렇군요. 그럼 ABBA 노래랑 이 *Chess* 뮤지컬 곡도 다 쓰셨다는 말씀이세요?
    28.56s  <ret> 발화 (turn6 첫 프레임)
    28.87s  agent 발화 시작: <ret> 정말 다작의 작곡가셨네요. 비외른 울바에우스 님은 베니 앤더슨 님과 자주 협업해서 ABBA의 가장
    29.13s  user  발화 끝
    30.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.45s]: Benny Andersson also co-wrote many songs with Björn Ulvaeus for ABBA.
    32.57s  user  발화 시작: 와.
    33.25s  user  발화 끝
    38.69s  user  발화 시작: 정말 대단하시네요. 다른 뮤지컬 작품도 하셨나요?
    38.88s  agent 발화 끝
    42.00s  <ret> 발화 (turn9 첫 프레임)
    42.38s  agent 발화 시작: <ret> 계속해서 뮤지컬 분야에 참여하셨지만, ABBA 외에는 *Chess*가 가장 유명한 작품입니다.
    42.48s  user  발화 끝
    43.12s  ⚡SPAN 주입(IRRELEVANT) [d'=1.12s / d_lead=6.76s]: (tool result) AAPL closed at 170.34, up 0.82 points.
    46.21s  user  발화 시작: 네네.
    46.84s  user  발화 끝
    49.02s  agent 발화 시작: 그 외에도 *Kristina from Duvemåla*라는 뮤지컬에도 참여하셨는데, 스웨덴에서 아주 성공적이
    49.14s  agent 발화 끝
    56.19s  user  발화 시작: 그것도 처음 들어봐요— 영어로 된 뮤지컬인가요?
    56.38s  agent 발화 끝
    59.02s  <ret> 발화 (turn13 첫 프레임)
    59.41s  agent 발화 시작: <ret> 흥미로운 역사를 가진 작품이에요. *Kristina from Duvemåla*는 원래 스웨덴어로 
    59.57s  user  발화 끝
    60.55s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.56s]: *Kristina from Duvemåla* is a Swedish musical with music by Benny Ande
    69.19s  agent 발화 끝
    70.03s  user  발화 시작: 아, 그럼 주로 스웨덴에서 공연하는군요?
    73.13s  agent 발화 시작: 네, 그렇습니다. 19세기에 미국으로 이민 간 스웨덴 사람들의 이야기를 다루고 있습니다.
    73.40s  user  발화 끝
    78.45s  agent 발화 끝
