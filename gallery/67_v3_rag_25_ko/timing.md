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

# EXAMINER(FDB-v2) 단계: S1 잭 소크랑 라파엘라 레지, 혹시 같이 운동하는 스포츠가 뭐예요 | S2 아, 프로 선수라고 하니까 그렇네요. 테니스 말고는 다른 활동 | S3 육십삼위면 꽤 잘하는 편이네요. 라파엘라 레지 선수도 복식 파 | S4 ITF 회로 우승 칠번이요? 그건 꽤 대단한 기록이네요.

     0.00s  user  발화 시작: 잭 소크랑 라파엘라 레지, 혹시 같이 운동하는 스포츠가 뭐예요?
     4.72s  user  발화 끝
     5.12s  agent 발화 시작: 두 분이 함께 즐기는 스포츠에 대해 궁금하시군요.
     5.97s  user  발화 시작: 네.
     6.28s  user  발화 끝
     7.95s  agent 발화 끝
     8.07s  user  발화 시작: 네, 그 두 분이 어떤 스포츠를 하는지 알고 싶어요.
    10.58s  <ret> 발화 (turn4 첫 프레임)
    10.85s  user  발화 끝
    10.98s  agent 발화 시작: <ret> 잭 소크 선수와 라파엘라 레지 선수 두 분은… 테니스 선수입니다.
    12.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: [source: Wikipedia] Jack Sock and Raffaella Reggi are both professiona
    15.85s  agent 발화 끝
    17.62s  user  발화 시작: 테니스요? 음… 좀 의외네요.…
    20.16s  user  발화 끝
    21.95s  user  발화 시작: …다른 스포츠도 같이 하나 싶었는데.
    24.07s  user  발화 끝
    24.41s  agent 발화 시작: 두 분이 다른 스포츠도 함께 하는지는 정확히 알 수 없지만, 프로 선수로서 테니스를 치는 건 확실합니다.
    30.69s  user  발화 시작: 아, 프로 선수라고 하니까 그렇네요. 테니스 말고는 다른 활동은 안 하나요?
    30.72s  agent 발화 끝
    34.53s  user  발화 끝
    35.02s  agent 발화 시작: 그 부분에 대한 정보는 현재로서는 찾기 어렵네요.
    38.25s  agent 발화 끝
    38.38s  user  발화 시작: 알겠습니다. 혹시 잭 소크 선수는 다른 선수랑도 파트너십을 맺나요?
    42.66s  <ret> 발화 (turn11 첫 프레임)
    42.81s  agent 발화 시작: <ret> 잭 소크 선수는 데니스 노비코프 선수와 함께 복식 경기에 출전한 적이 있습니다.
    42.83s  user  발화 끝
    44.18s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.36s]: [source: ATP Tour] Jack Sock has partnered with Dennis Novikov in doub
    47.17s  agent 발화 끝
    47.92s  user  발화 시작: 데니스 노비코프요? 그분은 어떤 선수인가요?
    50.41s  user  발화 끝
    50.95s  agent 발화 시작: 데니스 노비코프 선수에 대한 더 자세한 정보는 제가 지금 바로 찾아볼 수 있습니다.
    53.67s  user  발화 시작: 네.
    53.89s  user  발화 끝
    55.95s  agent 발화 끝
    56.07s  user  발화 시작: 네, 부탁드려요.
    56.73s  <ret> 발화 (turn16 첫 프레임)
    56.89s  user  발화 끝
    57.12s  agent 발화 시작: <ret> 데니스 노비코프 선수는 미국 프로 테니스 선수이고, 복식 랭킹 최고 순위는 육십삼위였습니다.
    58.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: [source: ATP Tour] Dennis Novikov is an American professional tennis p
    63.37s  agent 발화 끝
    64.68s  user  발화 시작: 육십삼위면 꽤 잘하는 편이네요. 라파엘라 레지 선수도 복식 파트너가 있나요?
    69.68s  <ret> 발화 (turn18 첫 프레임)
    69.84s  agent 발화 시작: <ret> 라파엘라 레지 선수는 이리나 바라 선수 등 여러 파트너와 함께 복식 경기에 출전했습니다.
    69.86s  user  발화 끝
    71.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: [source: WTA Tour] Raffaella Reggi has competed in doubles with numero
    75.49s  agent 발화 끝
    75.53s  user  발화 시작: 이리나 바라 선수도 테니스 선수인가요?
    77.69s  user  발화 끝
    77.84s  agent 발화 시작: 네, 이리나 바라 선수도 프로 테니스 선수입니다.
    79.71s  user  발화 시작: 네.
    80.02s  user  발화 끝
    80.79s  agent 발화 끝
    81.00s  user  발화 시작: 두 분 다 테니스 선수라니, 흥미롭네요. 혹시 잭 소크 선수나 라파엘라 레지 선수가 우승한 적이 있나요?
    87.83s  <ret> 발화 (turn23 첫 프레임)
    88.15s  agent 발화 시작: <ret> 잭 소크 선수는 이천십칠년 파리 마스터스 대회에서 단식 우승을 차지했습니다.
    88.18s  user  발화 끝
    88.95s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.68s]: [source: ESPN] Jack Sock won the 2017 Paris Masters title in singles.
    92.83s  agent 발화 끝
    93.66s  user  발화 시작: 이천십칠년 파리 마스터스에서 우승했군요. 라파엘라 레지 선수는요?
    99.02s  <ret> 발화 (turn25 첫 프레임)
    99.26s  agent 발화 시작: <ret> 라파엘라 레지 선수는 ITF 회로에서 복식 부문 칠번 우승했습니다.
    99.30s  user  발화 끝
   101.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: [source: WTA Tour] Raffaella Reggi has won 7 doubles titles on the ITF
   102.48s  user  발화 시작: 네네.
   102.97s  user  발화 끝
   104.04s  user  발화 시작: ITF 회로 우승 칠번이요? 그건 꽤 대단한 기록이네요.
   104.07s  agent 발화 끝
   107.25s  agent 발화 시작: 네, ITF 회로에서도 꾸준히 좋은 성적을 거두고 계십니다.
   107.27s  user  발화 끝
   110.80s  agent 발화 끝
   111.20s  user  발화 시작: 두 분 다 테니스에 대한 열정이 대단한 것 같아요. 혹시 두 분이 함께 경기를 한 적이 있나요?
   117.27s  user  발화 끝
   117.47s  <ret> 발화 (turn30 첫 프레임)
   117.55s  agent 발화 시작: <ret> 잭 소크 선수와 라파엘라 레지 선수는 프로 토너먼트에서 함께 경기를 한 적은 없습니다.
   117.97s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.14s]: [source: Tennis Abstract] Jack Sock and Raffaella Reggi have never com
   122.69s  agent 발화 끝
   124.17s  user  발화 시작: 함께 경기를 한 적은 없군요. 아쉽네요.
   126.76s  user  발화 끝
   126.96s  agent 발화 시작: 두 분의 협업을 보지 못해 아쉽지만, 각자의 분야에서 꾸준히 활동하고 계십니다.
   129.96s  user  발화 시작: 음.
   130.27s  user  발화 끝
   131.96s  agent 발화 끝
   132.23s  user  발화 시작: 네, 그렇군요. 오늘 알려주셔서 정말 감사합니다.
   134.95s  user  발화 끝
   135.13s  agent 발화 시작: 도움이 되었다니 기쁩니다.
   136.69s  agent 발화 끝
