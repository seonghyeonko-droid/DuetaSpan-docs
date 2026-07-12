# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "채은",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-21",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-09-22",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-30",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-11",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 디지털 아트 강좌 상품을 만들어… | S2 아니, 됐어요. 그 강좌 가격을 오만 원으로 설정해 줄 수 있 | S3 … 혹시 이 강좌를 홍보할 수 있는 방법도 알려줄 수 있나요? | S4 블로그 운영이 어렵다면 다른 방법은 없을까요?

     0.00s  user  발화 시작: 디지털 아트 강좌 상품을 만들어…
     2.21s  user  발화 시작: …줄 수 있을까요? 디지털 강좌예요.
     2.21s  user  발화 끝
     4.02s  <ret> 발화 (turn2 첫 프레임)
     4.42s  agent 발화 시작: <ret> 디지털 아트 강좌 상품을 만들었어요. 상품 아이디는 칠 팔 구 사 오 육입니다. 혹시 다른 강좌도
     4.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.96s]: (tool result) Product 'Digital Art Course' created with ID 789456.
     4.42s  user  발화 끝
    12.38s  user  발화 시작: 네.
    12.38s  agent 발화 끝
    12.82s  user  발화 시작: 아니, 됐어요. 그 강좌 가격을 오만 원으로 설정해 줄 수 있나요?
    12.82s  user  발화 끝
    17.45s  <ret> 발화 (turn5 첫 프레임)
    17.69s  agent 발화 시작: <ret> 네, 디지털 아트 강좌 가격을 오만 원으로 변경했습니다. —
    17.69s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.98s]: (tool result) Price for product 'Digital Art Course' (ID 789456) updat
    17.69s  user  발화 끝
    21.67s  user  발화 시작: … 혹시 이 강좌를 홍보할 수 있는 방법도 알려줄 수 있나요?
    21.67s  agent 발화 끝
    26.53s  agent 발화 시작: 홍보 방법에 대해 궁금하시군요. 다양한 방법이 있는데, 우선 소셜 미디어를 활용하는 방법이 있습니다.
    26.53s  user  발화 끝
    32.28s  user  발화 시작: 네.
    32.28s  agent 발화 끝
    32.72s  agent 발화 시작: 소셜 미디어 광고를 통해 타겟 고객에게 직접적으로 강좌를 홍보할 수 있고, 블로그나 유튜브 채널을 운영하여 
    32.72s  user  발화 끝
    45.99s  user  발화 시작: 네.
    45.99s  agent 발화 끝
    46.43s  user  발화 시작: 블로그 운영이 어렵다면 다른 방법은 없을까요?
    46.43s  user  발화 끝
    49.09s  agent 발화 시작: 블로그 운영이 어려우시다면, 인플루언서 마케팅을 고려해 볼 수 있습니다. 해당 분야의 인플루언서와 협력하여 
    49.09s  user  발화 끝
    56.16s  agent 발화 끝
