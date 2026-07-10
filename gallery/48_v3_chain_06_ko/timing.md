# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "태서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-05-15",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-15",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-02",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 마이애미에서 애틀랜타까지 버스 시간은 유월 일일에 얼마나 걸릴 | S2 구십오달러면 괜찮네요. 혹시 그 버스에 와이파이가 있나요? | S3 아직 여행 가방도 안 쌌어요. 뭘 챙겨야 할지 고민이에요. | S4 …혹시 거기 가는 버스는 또 어떻게 타야 할까요?

     0.00s  user  발화 시작: 마이애미에서 애틀랜타까지 버스 시간은 유월 일일에 얼마나 걸릴까요?
     4.67s  <ret> 발화 (turn1 첫 프레임)
     4.90s  agent 발화 시작: <ret> 마이애미에서 애틀랜타까지 버스로는 약 열네시간 삼십분이 걸리고, 요금은 백이십달러입니다. 오전 여
     4.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.27s]: (tool result) Duration: 14 hours 30 minutes, Price: $120.00, Depart: 0
     5.00s  user  발화 끝
    16.17s  agent 발화 끝
    16.35s  user  발화 시작: 백이십달러는 좀 비싸네요. 좀 더 저렴한 버스는 없을까요?
    21.22s  <ret> 발화 (turn3 첫 프레임)
    21.30s  user  발화 끝
    21.46s  agent 발화 시작: <ret> 유월 일일에 출발하는 버스 중에는 팔십오달러짜리도 있어요. 여섯시에 출발해서 밤 열시에 도착하는 
    21.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.25s]: (tool result) Duration: 16 hours, Price: $85.00, Depart: 06:00 AM, Arr
    29.61s  user  발화 시작: 여섯시 출발은 너무 일러요. 아홉시 이후에 출발하는 버스는 없나요?
    29.71s  agent 발화 끝
    34.28s  user  발화 끝
    34.29s  <ret> 발화 (turn5 첫 프레임)
    34.37s  agent 발화 시작: <ret> 아홉시 삼십분에 출발하는 버스는 백오달러이고, 다음 날 새벽 한시 십오분에 도착합니다. 혹시 다른
    34.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: (tool result) Duration: 15 hours 45 minutes, Price: $105.00, Depart: 0
    40.27s  user  발화 시작: 진짜요?
    41.10s  user  발화 끝
    42.38s  agent 발화 끝
    42.46s  user  발화 시작: 음… 유월 이일은 어떨까요?
    44.92s  <ret> 발화 (turn8 첫 프레임)
    45.32s  agent 발화 시작: <ret> 유월 이일에는 열시에 출발해서 다음 날 새벽 열두시 삼십분에 도착하는 구십오달러짜리 버스가 있습니
    45.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.58s]: (tool result) Duration: 14 hours 30 minutes, Price: $95.00, Depart: 10
    45.36s  user  발화 끝
    48.99s  user  발화 시작: 네.
    49.59s  user  발화 끝
    51.69s  user  발화 시작: 구십오달러면 괜찮네요. 혹시 그 버스에 와이파이가 있나요?
    51.90s  agent 발화 끝
    56.58s  <ret> 발화 (turn11 첫 프레임)
    56.82s  agent 발화 시작: <ret> 죄송하지만, 해당 버스에 와이파이가 있는지에 대한 정보는 찾을 수 없었습니다.
    56.82s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.90s]: (no information found)
    56.83s  user  발화 끝
    61.72s  agent 발화 끝
    62.50s  user  발화 시작: 아, 그렇군요. 그럼 좌석은 편한가요?
    65.11s  <ret> 발화 (turn13 첫 프레임)
    65.27s  user  발화 끝
    65.27s  agent 발화 시작: <ret> 좌석의 편안함에 대한 정보도 찾을 수 없습니다. 버스 회사에 직접 문의해 보시는 게 좋을 것 같아
    65.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: (no information found)
    69.07s  user  발화 시작: 네.
    69.56s  user  발화 끝
    71.06s  agent 발화 끝
    71.79s  user  발화 시작: 알겠습니다. 그럼 유월 이일 열시 출발하는 버스 티켓을 예매해 주세요.
    76.51s  <ret> 발화 (turn16 첫 프레임)
    76.65s  user  발화 끝
    76.67s  agent 발화 시작: <ret> 유월 이일 열시 출발하는 마이애미-애틀랜타 버스 티켓을 예매했습니다. 확인번호는 비 엑스 구 이 
    76.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: (tool result) Confirmation ID: BX927HD
    79.75s  user  발화 시작: 어머.
    80.33s  user  발화 끝
    85.34s  agent 발화 끝
    86.54s  user  발화 시작: 비 엑스 구 이 칠 에이치 디요? 확인번호 잘 적어뒀어요.
    91.68s  user  발화 끝
    91.71s  agent 발화 시작: 다행입니다. 혹시 여행 준비는 잘 되어 가시나요?
    95.08s  agent 발화 끝
    95.28s  user  발화 시작: 아직 여행 가방도 안 쌌어요. 뭘 챙겨야 할지 고민이에요.
    99.12s  user  발화 끝
    99.30s  agent 발화 시작: 여행 가방을 꾸리는 건 항상 설레면서도 고민스러운 일이죠. 혹시 어떤 종류의 여행을 좋아하시나요?
   106.53s  agent 발화 끝
   106.53s  user  발화 시작: 주로 자연을 즐기는 여행을 좋아해요. 하이킹이나 캠핑 같은 거요.
   111.03s  <ret> 발화 (turn23 첫 프레임)
   111.35s  user  발화 끝
   111.43s  agent 발화 시작: <ret> 자연을 즐기시는군요. 멋진데요. 혹시 애틀랜타 근처에 하이킹하기 좋은 곳을 알고 싶으신가요?
   111.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: (tool result) Stone Mountain Park offers over 30 miles of trails, Amic
   118.56s  agent 발화 끝
   118.56s  agent 발화 시작: 애틀랜타 근처에는 스톤 마운틴 파크, 아미콜라 폭포 주립공원, 케네소 마운틴 국립전적지가 하이킹하기 좋기로 
   124.48s  user  발화 시작: 음.
   125.06s  user  발화 끝
   127.14s  agent 발화 끝
   128.71s  user  발화 시작: 스톤 마운틴 파크는요? 거기는 어떤 곳인가요?
   131.84s  <ret> 발화 (turn27 첫 프레임)
   132.04s  user  발화 끝
   132.07s  agent 발화 시작: <ret> 스톤 마운틴 파크는 거대한 석영 단괴 돔과 하이킹 코스, 경치 좋은 기차, 다양한 볼거리가 있는 
   132.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.88s]: (tool result) Stone Mountain Park is a 3,200-acre park featuring a mas
   141.94s  agent 발화 끝
   143.71s  user  발화 시작: 와, 정말 멋진 곳이네요.
   145.55s  user  발화 끝
   145.61s  agent 발화 시작: 네, 많은 분들이 스톤 마운틴 파크를 찾으시는 이유가 있죠. —
   148.36s  user  발화 시작: …혹시 거기 가는 버스는 또 어떻게 타야 할까요?
   148.98s  agent 발화 끝
   151.46s  user  발화 끝
   151.49s  <ret> 발화 (turn31 첫 프레임)
   151.65s  agent 발화 시작: <ret> 애틀랜타 버스 터미널에서 스톤 마운틴 파크까지는 사십오분이 걸리고, 요금은 오달러입니다. 삼십분 
   151.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.48s]: (tool result) Duration: 45 minutes, Price: $5.00, Depart: Every 30 min
   155.99s  user  발화 시작: 그렇죠.
   156.72s  user  발화 끝
   160.12s  agent 발화 끝
   160.14s  user  발화 시작: 오달러면 저렴하네요.
   162.16s  agent 발화 시작: 그렇죠, 부담 없이 다녀올 수 있을 것 같아요. 여행 계획 세우는 게 즐거우시죠?
   162.21s  user  발화 끝
   167.49s  agent 발화 끝
   168.27s  user  발화 시작: 네, 정말 즐거워요. 덕분에 여행이 더 기대돼요.
   171.94s  agent 발화 시작: 저도 기쁩니다. 즐거운 여행 되세요.
   172.06s  user  발화 끝
   174.44s  agent 발화 끝
