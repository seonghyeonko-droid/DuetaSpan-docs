# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "은연",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-19",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 잭 소크랑 라파엘라 레지 선수, 혹시 무슨 스포츠 하는지 아세 | S2 결승까지 갔다고요? 대단하네요. 혹시 우승도 했나요? | S3 공격적인 스타일이군요. 레지 선수도 그런 스타일인가요? | S4 아직도 활동하고 있군요. 레지 선수는요?

     0.00s  user  발화 시작: 잭 소크랑 라파엘라 레지 선수, 혹시 무슨 스포츠 하는지 아세요?
     4.19s  <ret> 발화 (turn1 첫 프레임)
     4.54s  user  발화 끝
     4.58s  agent 발화 시작: <ret> 확인해 보겠습니다.
     5.23s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.20s]: [source: Wikipedia] Jack Sock and Raffaella Reggi are both professiona
     5.70s  agent 발화 시작: 잭 소크 선수와 라파엘라 레지 선수 두 분은… 테니스 선수입니다.
     5.77s  agent 발화 끝
    10.28s  agent 발화 끝
    10.43s  user  발화 시작: 테니스요? 음… 좀 의외네요. 혹시 두 분이 같이 뛴 적도 있어요?
    14.44s  <ret> 발화 (turn4 첫 프레임)
    14.74s  agent 발화 시작: <ret> 두 분이 함께 경기를 하셨는지 알아볼까요?
    14.96s  user  발화 끝
    15.64s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.68s]: [source: ATP Tour] Jack Sock and Raffaella Reggi competed together in 
    17.23s  agent 발화 시작: 잭 소크 선수와 라파엘라 레지 선수는… 이천십팔년 홉먼컵에서 함께 출전했습니다.
    17.42s  agent 발화 끝
    23.16s  agent 발화 끝
    23.35s  user  발화 시작: 홉먼컵이요? 그게 뭔데요?
    25.02s  agent 발화 시작: 홉먼컵은 국가 대항전 방식의 테니스 대회입니다.
    25.24s  user  발화 끝
    26.12s  user  발화 시작: 네.
    26.61s  user  발화 끝
    28.36s  agent 발화 시작: 여러 나라에서 팀을 이루어 경쟁하는 방식이에요.
    28.49s  agent 발화 끝
    31.41s  agent 발화 끝
    31.98s  user  발화 시작: 아하, 그렇군요. 그럼 두 분이 홉먼컵에서 얼마나 잘했는데요?
    36.25s  <ret> 발화 (turn11 첫 프레임)
    36.42s  user  발화 끝
    36.49s  agent 발화 시작: <ret> 홉먼컵에서의 성적을 찾아볼게요.
    37.53s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.40s]: [source: ESPN] Jack Sock and Raffaella Reggi won their singles matches
    38.83s  agent 발화 시작: 잭 소크 선수와 라파엘라 레지 선수는… 이천십팔년 홉먼컵에서 단식 경기를 모두 이겨 미국팀이 결승에 진출하는
    38.89s  agent 발화 끝
    43.74s  user  발화 시작: 네.
    44.14s  user  발화 끝
    47.78s  agent 발화 끝
    48.17s  user  발화 시작: 결승까지 갔다고요? 대단하네요. 혹시 우승도 했나요?
    51.91s  <ret> 발화 (turn15 첫 프레임)
    51.96s  agent 발화 시작: <ret> 결승전 결과도 알아봐 드릴게요.
    51.96s  user  발화 끝
    52.95s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.50s]: [source: Tennis.com] The United States lost the 2018 Hopman Cup final 
    54.36s  agent 발화 시작: 미국팀은… 이천십팔년 홉먼컵 결승에서 스위스에 아쉽게 패배했습니다.
    54.45s  agent 발화 끝
    59.32s  agent 발화 끝
    59.84s  user  발화 시작: 아, 아깝네요. 그럼 레지 선수 말고 다른 파트너랑도 뛴 적 있어요?
    63.30s  <ret> 발화 (turn18 첫 프레임)
    63.53s  agent 발화 시작: <ret> 잭 소크 선수의 다른 파트너를 검색해 보겠습니다.
    63.68s  user  발화 끝
    64.90s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.24s]: [source: WTA Tour] Jack Sock has also partnered with Coco Vandeweghe i
    66.65s  agent 발화 시작: 잭 소크 선수는… 코코 반데웨이 선수와도 여러 토너먼트에서 파트너로 활동했습니다.
    66.76s  agent 발화 끝
    72.62s  agent 발화 끝
    72.73s  user  발화 시작: 코코 반데웨이요? 그 선수도 유명하죠.
    75.89s  agent 발화 시작: 네, 코코 반데웨이 선수도 뛰어난 테니스 선수입니다.
    76.07s  user  발화 끝
    77.73s  user  발화 시작: 네.
    78.36s  user  발화 끝
    79.12s  agent 발화 끝
    79.21s  agent 발화 시작: 강렬한 서브와 파워풀한 플레이가 특징입니다.
    82.10s  user  발화 시작: 잭 소크 선수는 주로 어떤 스타일의 테니스 선수가예요?
    82.30s  agent 발화 끝
    85.55s  <ret> 발화 (turn25 첫 프레임)
    85.86s  agent 발화 시작: <ret> 잭 소크 선수의 플레이 스타일을 설명해 드릴게요.
    85.99s  user  발화 끝
    86.91s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.96s]: [source: US Open] Jack Sock is known for his aggressive baseline game 
    88.66s  agent 발화 시작: 잭 소크 선수는… 공격적인 베이스라인 게임과 강력한 서브가 특징입니다.
    88.82s  agent 발화 끝
    91.78s  user  발화 시작: 네.
    92.23s  user  발화 끝
    93.74s  agent 발화 끝
    93.95s  user  발화 시작: 공격적인 스타일이군요. 레지 선수도 그런 스타일인가요?
    97.40s  <ret> 발화 (turn29 첫 프레임)
    97.64s  agent 발화 시작: <ret> 라파엘라 레지 선수의 스타일도 확인해 보겠습니다.
    97.88s  user  발화 끝
    99.08s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.23s]: [source: ITF Tennis] Raffaella Reggi is a defensive player known for h
   100.76s  agent 발화 시작: 라파엘라 레지 선수는… 꾸준한 그라운드 스트로크를 구사하는 수비형 선수로 알려져 있습니다.
   100.87s  agent 발화 끝
   106.11s  user  발화 시작: 수비형이라… 잭 소크 선수랑 잘 맞았겠네요.
   106.36s  agent 발화 끝
   109.44s  agent 발화 시작: 공격과 수비를 모두 갖춘 조합이었던 셈이죠.
   109.63s  user  발화 끝
   111.55s  user  발화 시작: 음.
   112.04s  user  발화 끝
   112.68s  agent 발화 끝
   113.05s  user  발화 시작: 두 분 다 은퇴하셨나요?…
   114.71s  user  발화 끝
   116.51s  user  발화 시작: …아니면 아직도 활동하고 있나요?
   118.68s  <ret> 발화 (turn36 첫 프레임)
   118.83s  agent 발화 시작: <ret> 현재 두 분의 활동 상태를 알아볼게요.
   119.04s  user  발화 끝
   119.96s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.40s]: [source: ATP Tour] Jack Sock is currently ranked number 136 in the wor
   121.17s  agent 발화 시작: 잭 소크 선수는… 이천이십삼년 십일월 기준으로 세계 랭킹 백삼십육위입니다.
   121.23s  agent 발화 끝
   126.78s  agent 발화 끝
   126.92s  user  발화 시작: 아직도 활동하고 있군요. 레지 선수는요?
   130.18s  <ret> 발화 (turn39 첫 프레임)
   130.58s  agent 발화 시작: <ret> 라파엘라 레지 선수의 현재 활동 상태도 확인해 보겠습니다.
   130.76s  user  발화 끝
   132.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.02s]: [source: WTA Tour] Raffaella Reggi retired from professional tennis in
   134.38s  agent 발화 시작: 라파엘라 레지 선수는… 이천십구년에 프로 테니스 선수로서 은퇴했습니다.
   134.61s  agent 발화 끝
   139.14s  user  발화 시작: 아, 레지 선수는 은퇴하셨군요. 잭 소크 선수는 앞으로도 계속 활약하겠네요.
   139.29s  agent 발화 끝
   144.70s  user  발화 끝
   144.98s  agent 발화 시작: 네, 앞으로도 잭 소크 선수의 활약을 기대해 볼 수 있겠습니다.
   148.73s  agent 발화 끝
   149.72s  user  발화 시작: 오늘 알려주셔서 감사합니다.
   151.79s  user  발화 끝
   151.84s  agent 발화 시작: 도움이 되었다니 기쁩니다.
   153.44s  agent 발화 끝
