# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: David · Location: London, United Kingdom · Nationality: British · Gender: male · Age: early 30s · TZ: Europe/London (GMT, UTC+0) · Currency: GBP (£)
#   B. 저장 메모리:
#      [2026-06-05] User is gluten-free.
#      [2026-05-20] User is planning a trip to Kyoto in March.
#      [2026-03-07] User's favorite cuisine is Italian.
#      [2026-02-07] User has a Golden Retriever named Max.
#   B. 과거 대화 요약:
#      [2026-07-22] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han

# EXAMINER(FDB-v2) 단계: S1 맘마미아를 듣고 있었는데, 궁금한 게 생겼어요. “My Lov | S2 네, 정말 그렇네요. 음, 그는 다른 뮤지컬에도 참여했나요? | S3 아, 베니 앤더슨도 그 작품에 참여했나요? | S4 그럼, ABBA랑 *Chess*랑… 혹시 다른 큰 작품도 있나

     0.00s  user  발화 시작: 맘마미아를 듣고 있었는데, 궁금한 게 생겼어요. “My Love, My Life”는 누가 썼나요?
     5.83s  <ret> 발화 (turn1 첫 프레임)
     5.98s  agent 발화 시작: <ret> 정말 좋은 노래네요. 그 아름다운 곡은 원래 *Chess*를 위해 비욘 울바에우스가 작곡한 곡이에
     6.16s  user  발화 끝
     7.59s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.91s]: Björn Ulvaeus wrote “My Love, My Life” for the musical *Chess*.
    12.29s  user  발화 시작: 아, *Chess*군요! 맘마미아 곡이 아니었다니, 몰랐어요.
    12.33s  agent 발화 끝
    16.86s  user  발화 끝
    16.97s  agent 발화 시작: 노래가 여러 작품에서 새로운 생명을 얻는다는 게 정말 흥미롭지 않나요?
    21.41s  agent 발화 끝
    21.47s  user  발화 시작: 네, 정말 그렇네요. 음, 그는 다른 뮤지컬에도 참여했나요?
    25.88s  <ret> 발화 (turn5 첫 프레임)
    25.95s  user  발화 끝
    26.19s  agent 발화 시작: <ret> 비욘 울바에우스는 꽤 풍부한 음악적 배경을 가지고 있어요. 베니 앤더슨과 라스 바이스마크와 함께 
    27.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.33s]: Björn Ulvaeus co-wrote *Kristina from Duvemåla* with Benny Andersson a
    37.30s  user  발화 시작: 발음하기 어렵네요! 그 작품도 유명한가요?
    37.32s  agent 발화 끝
    40.14s  <ret> 발화 (turn7 첫 프레임)
    40.53s  agent 발화 시작: <ret> 스웨덴에서는 꽤 인기가 있지만, 다른 곳에서는 덜 알려져 있을 수도 있어요. 웅장한 역사극이에요.
    40.67s  user  발화 끝
    41.26s  ⚡SPAN 주입(IRRELEVANT) [d'=1.12s / d_lead=6.25s]: (tool result) AAPL: 170.34 +0.45 (0.26%)
    46.78s  agent 발화 끝
    46.83s  user  발화 시작: 아, 베니 앤더슨도 그 작품에 참여했나요?
    49.61s  user  발화 시작: 저… 그러니까, 방금 말씀하셨지만, 그는 자주 협업하는 분인가요?
    49.73s  user  발화 끝
    54.63s  agent 발화 시작: 네, 베니 앤더슨과 비욘 울바에우스는 아주 유명한 작곡 듀오예요. 많은 프로젝트에서 함께 작업했어요.
    54.80s  user  발화 끝
    57.50s  user  발화 시작: 네.
    57.95s  user  발화 끝
    61.38s  user  발화 시작: 그럼, ABBA랑 *Chess*랑… 혹시 다른 큰 작품도 있나요?
    61.44s  agent 발화 끝
    66.66s  user  발화 끝
    66.69s  agent 발화 시작: 그들은 버디 홀리에게 바치는 뮤지컬 *Buddy – The Musical*의 음악도 만들었어요. 아주 활기찬
    73.08s  agent 발화 끝
