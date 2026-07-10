# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "유준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-11-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-08-27",
#       "category": "home",
#       "text": "User's home address is 913 Oak Avenue."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-09",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 장바구니 iframe에서 결제 과정을 시작해 줄래? | S2 맞아. 그 주소로 해줘. | S3 신용카드로 할게. | S4 고마워.

     0.00s  user  발화 시작: 장바구니 iframe에서 결제 과정을 시작해 줄래?
     3.05s  <ret> 발화 (turn1 첫 프레임)
     3.35s  agent 발화 시작: <ret> 네, 장바구니 iframe에서 결제 과정을 시작했어요. 이제 결제 정보를 입력하는 화면으로 넘어갔
     3.42s  user  발화 끝
     5.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.51s]: (tool result) 결제 과정이 시작되었습니다.
     8.56s  user  발화 시작: 아.
     9.05s  user  발화 끝
    10.43s  user  발화 시작: 음…
    10.86s  agent 발화 끝
    10.92s  user  발화 끝
    11.06s  <ret> 발화 (turn4 첫 프레임)
    11.13s  agent 발화 시작: <ret> 네, 현재 저장된 배송 주소는 서울특별시 강남구 테헤란로 사백이십칠입니다. 이 주소로 배송해 드릴
    13.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: (tool result) 서울특별시 강남구 테헤란로 427
    17.85s  agent 발화 끝
    17.93s  user  발화 시작: 맞아. 그 주소로 해줘.
    19.26s  <ret> 발화 (turn6 첫 프레임)
    19.30s  user  발화 끝
    19.33s  agent 발화 시작: <ret> 네, 배송 주소를 서울특별시 강남구 테헤란로 사백이십칠로 설정했습니다. 이제 결제 수단을 선택하는
    21.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: (tool result) 배송 주소가 설정되었습니다.
    27.44s  agent 발화 끝
    27.90s  user  발화 시작: 신용카드로 할게.
    28.98s  agent 발화 시작: 신용카드 정보를 입력해 주시면 됩니다. 카드 번호, 유효기간, 그리고 CVC 번호를 순서대로 알려주세요. 안
    29.04s  user  발화 끝
    39.15s  user  발화 시작: 카드 번호는 일 이 삼 사 오 육 칠 팔 구 공 일 이 삼 사 오 육, 유효기간은 이천이십오년 십이월, CV
    39.32s  agent 발화 끝
    46.24s  <ret> 발화 (turn10 첫 프레임)
    46.46s  agent 발화 시작: <ret> 네, 신용카드 결제가 완료되었습니다. 주문 번호는 이 공 이 사 공 칠 이 육 일 이 삼 사입니다
    46.56s  user  발화 끝
    48.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: (tool result) 결제가 완료되었습니다. 주문 번호는 20240726-1234입니다.
    55.47s  user  발화 시작: 고마워.
    56.01s  agent 발화 끝
    56.09s  agent 발화 시작: 천만에요. 혹시 더 필요한 건 없으신가요? 쇼핑 즐거우셨길 바라요.
    56.10s  user  발화 끝
    60.80s  agent 발화 끝
