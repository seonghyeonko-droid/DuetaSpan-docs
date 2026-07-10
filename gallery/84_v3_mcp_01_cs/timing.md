# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Louis",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-07-05",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 세션 제로 제로 일에서 토큰을 몇 퍼센트나 사용했는지 궁 | S2 …그 세션의 주요 내용만 알려 주세요. | S3 스토리였군요. [surprised] 근처에 괜찮은 식당 좀 찾 | S4 벨라 이탈리아가 괜찮겠네요. 오늘 저녁 7시 30분에 두 명 

     0.00s  user  발화 시작: 오늘 세션 제로 제로 일에서 토큰을 몇 퍼센트나 사용했는지 궁금합니다.
     4.60s  <ret> 발화 (turn1 첫 프레임)
     4.75s  agent 발화 시작: <ret> 네, 세션 제로 제로 일은 토큰의 78.3퍼센트를 사용했습니다. 꽤 많이 사용했네요.
     4.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.83s]: (tool result) Session 001 used 78.3% of its allocated tokens.
     4.95s  user  발화 끝
     8.29s  user  발화 시작: 그렇죠.
     8.79s  user  발화 끝
    10.58s  agent 발화 끝
    11.07s  user  발화 시작: 음, 그 세션의 상세 내용을 보여 주실 수 있을까요…
    14.31s  user  발화 끝
    15.38s  user  발화 시작: …그 세션의 주요 내용만 알려 주세요.
    17.73s  <ret> 발화 (turn5 첫 프레임)
    18.04s  agent 발화 시작: <ret> 그 세션은 이천이십육 년 7월 8일 오전 10시 15분에 시작해서 7월 9일 오후 6시에 끝났습니
    18.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.46s]: Session 001 started on July 8, 2026, at 10:15 AM and ended July 9, 202
    18.10s  user  발화 끝
    25.86s  user  발화 시작: 음.
    26.31s  user  발화 끝
    29.29s  user  발화 시작: 스토리였군요. [surprised] 근처에 괜찮은 식당 좀 찾아 주시겠어요?
    29.50s  agent 발화 끝
    32.83s  <ret> 발화 (turn8 첫 프레임)
    32.91s  agent 발화 시작: <ret> 알겠습니다. 근처에 세 곳의 식당을 찾았습니다. 벨라 이탈리아는 별점 4.5점인 이탈리아 식당이고
    32.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.94s]: (tool result) Found 3 restaurants: "Bella Italia" (Italian, 4.5 stars)
    33.08s  user  발화 끝
    45.77s  user  발화 시작: 벨라 이탈리아가 괜찮겠네요. 오늘 저녁 7시 30분에 두 명 자리를 예약해 주시겠어요?
    45.85s  agent 발화 끝
    51.53s  <ret> 발화 (turn10 첫 프레임)
    51.84s  agent 발화 시작: <ret> 좋습니다. 벨라 이탈리아에 두 명 자리가 저녁 7시 30분에 예약되었습니다. 확인 번호는 BI 7
    51.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: (tool result) Reservation confirmed at Bella Italia for 2 people at 7:
    52.02s  user  발화 끝
    61.81s  agent 발화 끝
