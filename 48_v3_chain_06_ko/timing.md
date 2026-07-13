# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "라담",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-07-02",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-10",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-11-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 서울에서 갈 만한 곳 좀 찾아줘. | S2 백칠십일번 버스를 타면 어디서 내려야 해? | S3 길 안내 시작해 줘. | S4 [sigh] 칼국수가 먹고 싶다.

     0.00s  user  발화 시작: 이번 주 토요일에 서울에서 갈 만한 곳 좀 찾아줘.
     4.32s  <ret> 발화 (turn1 첫 프레임)
     4.56s  agent 발화 시작: <ret> 서울에는 경복궁, 남산타워, 인사동처럼 가볼 만한 곳이 정말 많아요. 혹시 특별히 관심 있는 곳이
     4.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: 서울에는 경복궁, 남산타워, 인사동 등 다양한 명소가 있습니다.
     4.56s  user  발화 끝
    12.16s  user  발화 시작: 어.
    12.16s  agent 발화 끝
    12.66s  user  발화 시작: 음… 경복궁이 좋을 것 같아. 거기는 몇 시에 문을 여는 거야?
    12.66s  user  발화 끝
    17.99s  <ret> 발화 (turn4 첫 프레임)
    18.23s  agent 발화 시작: <ret> 경복궁은 삼월부터 시월까지는 아홉 시에 열고, 십일월부터 이월까지는 다섯 시에 닫아요. 지금은 칠
    18.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.13s]: 경복궁은 계절에 따라 개관 시간이 다릅니다. 3월부터 10월까지는 오전 9시부터 오후 6시까지 개관하며, 11월부터 2월까지는
    18.23s  user  발화 끝
    28.37s  user  발화 시작: 오, 좋아. 그럼 거기로 가는 버스 시간표 좀 알아봐 줘.
    28.37s  agent 발화 끝
    33.35s  <ret> 발화 (turn6 첫 프레임)
    33.43s  agent 발화 시작: <ret> 경복궁역을 지나는 버스는 백구번, 백칠십일번, 백칠십이번, 그리고 육백일번이 있어요. 첫차는 아침
    33.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.10s]: (tool result) 109, 171, 172, 601번 버스가 경복궁역을 경유합니다. 첫차는 오전 5시 30분, 막차는 
    33.43s  user  발화 끝
    41.53s  user  발화 시작: 백칠십일번 버스를 타면 어디서 내려야 해?
    41.53s  agent 발화 끝
    44.17s  <ret> 발화 (turn8 첫 프레임)
    44.57s  agent 발화 시작: <ret> 백칠십일번 버스를 타시면 경복궁역 오번 출구에서 내리시면 돼요. 거기서부터 경복궁까지 걸어서 오분
    44.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: 171번 버스는 경복궁역 5번 출구에서 하차하면 경복궁까지 도보로 5분 거리에 도착합니다.
    44.57s  user  발화 끝
    51.67s  user  발화 시작: 아, 알았어. 그럼 그 버스 정류장까지 가는 길을 알려줘.
    51.67s  agent 발화 끝
    55.98s  <ret> 발화 (turn10 첫 프레임)
    56.22s  agent 발화 시작: <ret> 지금 계신 곳에서 경복궁역 오번 출구 버스 정류장까지 걸어서 일 점 이킬로미터, 약 십오분 정도 
    56.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.10s]: (tool result) 현재 위치에서 경복궁역 5번 출구 버스 정류장까지 도보로 약 1.2km, 15분 소요됩니다.
    56.22s  user  발화 끝
    64.33s  user  발화 시작: 십오분 정도면 괜찮네.
    64.33s  agent 발화 끝
    65.85s  agent 발화 시작: 네, 괜찮으시겠어요. 혹시 길 안내를 시작해 드릴까요? 아니면 다른 정보를 더 찾아볼까요?
    65.85s  user  발화 끝
    71.93s  user  발화 시작: 길 안내 시작해 줘.
    71.93s  agent 발화 끝
    73.79s  <ret> 발화 (turn14 첫 프레임)
    73.95s  agent 발화 시작: <ret> 지금부터 오백미터 쭉 직진하시고, 우회전해서 삼백미터 가세요. 그리고 다시 좌회전해서 사백미터 더
    73.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: (tool result) 500미터 직진 후 우회전하여 300미터 이동, 다시 좌회전하여 400미터 이동하면 목적지에 도착합니
    73.95s  user  발화 끝
    81.04s  user  발화 시작: 알겠어. 근데 혹시 경복궁 안에 맛있는 식당 있어?
    81.04s  agent 발화 끝
    84.94s  <ret> 발화 (turn16 첫 프레임)
    85.10s  agent 발화 시작: <ret> 경복궁 안에는 푸드코트가 있어서 다양한 한식을 드실 수 있어요.
    85.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.56s]: 경복궁 내에는 푸드코트가 있으며, 다양한 종류의 한식을 맛볼 수 있습니다.
    85.10s  user  발화 끝
    89.65s  user  발화 시작: 푸드코트가 있구나. 메뉴는 뭐가 있어?
    89.65s  agent 발화 끝
    92.11s  <ret> 발화 (turn18 첫 프레임)
    92.19s  agent 발화 시작: <ret> 푸드코트에는 비빔밥, 불고기, 칼국수, 만두 같은 한식 메뉴가 다양하게 준비되어 있습니다.
    92.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.57s]: 푸드코트에는 비빔밥, 불고기, 칼국수, 만두 등 다양한 한식 메뉴가 있습니다.
    92.19s  user  발화 끝
    97.76s  user  발화 시작: [sigh] 칼국수가 먹고 싶다.
    97.76s  agent 발화 끝
    99.78s  agent 발화 시작: 칼국수가 드시고 싶으시군요. 날씨도 시원해졌는데, 따뜻한 칼국수 한 그릇이면 정말 좋을 것 같아요.
    99.78s  user  발화 끝
   106.37s  user  발화 시작: 맞아. 그럼 칼국수 파는 식당 예약해 줘.
   106.37s  agent 발화 끝
   109.59s  <ret> 발화 (turn22 첫 프레임)
   109.91s  agent 발화 시작: <ret> 경복궁 근처 칼국수 맛집 '고궁칼국수' 예약이 완료되었습니다. 오늘 오후 한시에 예약되었고, 예약
   109.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.16s]: (tool result) 경복궁 근처 칼국수 맛집 '고궁칼국수' 예약 완료. 예약 시간: 2026년 7월 10일 오후 1시, 
   109.91s  user  발화 끝
   122.07s  user  발화 시작: 응.
   122.07s  agent 발화 끝
   122.58s  user  발화 시작: 케이 지 에스 이 육 공 칠 일 공 일 삼. 알았어. 고마워.
   122.58s  user  발화 끝
   129.16s  agent 발화 시작: 예약 아이디 케이 지 에스 이 육 공 칠 일 공 일 삼, 확인하셨어요. 즐거운 시간 보내시길 바랍니다.
   129.16s  user  발화 끝
   138.28s  agent 발화 끝
