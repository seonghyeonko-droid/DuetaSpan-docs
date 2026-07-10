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

# EXAMINER(FDB-v2) 단계: S1 장바구니 iframe에서 결제 프로세스를 시작해 줄 수 있어? | S2 그 주소는 변경해야 해. 사백오십육 Oak Avenue, 다른 | S3 빠른 배송으로 해줘. | S4 이제 결제해줘.

     0.00s  user  발화 시작: 장바구니 iframe에서 결제 프로세스를 시작해 줄 수 있어?
     3.32s  <ret> 발화 (turn1 첫 프레임)
     3.64s  agent 발화 시작: <ret> 네, 장바구니 iframe에서 결제 프로세스를 시작했습니다.
     3.84s  user  발화 끝
     5.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.61s]: (tool result) checkout initiated
     7.89s  user  발화 시작: 네.
     8.38s  user  발화 끝
     9.25s  agent 발화 끝
    10.51s  user  발화 시작: 결제 주소는 어디로 설정되어 있어?
    10.81s  <ret> 발화 (turn4 첫 프레임)
    10.88s  agent 발화 시작: <ret> 현재 결제 주소는 캘리포니아주 애니타운 메인 스트리트 백이십삼번지로 설정되어 있습니다.
    10.95s  user  발화 끝
    11.93s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.68s]: (tool result) 123 Main Street, Anytown, CA 91234
    15.54s  user  발화 시작: 그 주소는 변경해야 해. 사백오십육 Oak Avenue, 다른 도시, 뉴욕 일 공 공 공 일로 바꿔줘.
    15.56s  agent 발화 끝
    16.87s  <ret> 발화 (turn6 첫 프레임)
    17.27s  agent 발화 시작: <ret> 네, 결제 주소를 뉴욕주 다른 도시 오크 애비뉴 사백오십육번지로 변경했습니다.
    17.43s  user  발화 끝
    18.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: (tool result) address updated to 456 Oak Avenue, Othertown, NY 10001
    22.41s  agent 발화 끝
    23.63s  user  발화 시작: 배송 옵션은 어떻게 돼?
    24.56s  <ret> 발화 (turn8 첫 프레임)
    24.88s  agent 발화 시작: <ret> 배송 옵션은 일반 배송(삼~오일, 오 점 구 구달러)과 빠른 배송(일~이일, 십이 점 구 구달러)
    25.00s  user  발화 끝
    26.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: (tool result) standard (3-5 days, $5.99), expedited (1-2 days, $12.99)
    29.88s  agent 발화 끝
    29.97s  user  발화 시작: 빠른 배송으로 해줘.
    34.38s  <ret> 발화 (turn10 첫 프레임)
    34.62s  agent 발화 시작: <ret> 빠른 배송으로 설정했습니다. 배송비는 십이 점 구 구달러입니다.
    34.64s  user  발화 끝
    35.91s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.03s]: (tool result) shipping option set to expedited
    38.64s  agent 발화 끝
    38.69s  user  발화 시작: 총 금액이 얼마야?
    43.90s  <ret> 발화 (turn12 첫 프레임)
    44.05s  agent 발화 시작: <ret> 총 금액은 칠십구 점 구 구달러입니다.
    44.11s  user  발화 끝
    44.40s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.37s]: (tool result) $79.99
    45.42s  agent 발화 끝
    45.78s  user  발화 시작: 이제 결제해줘.
    54.80s  <ret> 발화 (turn14 첫 프레임)
    55.14s  user  발화 끝
    55.19s  agent 발화 시작: <ret> 네, 결제가 완료되었고, 확인 번호는 일 이 삼 사 오입니다.
    55.30s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.82s]: (tool result) payment processed, confirmation #12345
    56.01s  agent 발화 끝
    56.01s  user  발화 시작: 고마워.
    58.91s  agent 발화 시작: 천만에요.
    58.92s  user  발화 끝
    59.73s  agent 발화 끝
