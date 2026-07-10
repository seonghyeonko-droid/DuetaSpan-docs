# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "보우",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-02",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-25",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 FOB destination 조건에서 운송비는 누가 부담 | S2 그럼, FOB shipping point 조건은요? | S3 그런데, FOB 조건 말고 다른 조건은 뭐가 있을까요? | S4 아, 그렇군요. 명확하게 알 것 같아요.

     0.00s  user  발화 시작: 혹시 FOB destination 조건에서 운송비는 누가 부담하나요?
     3.90s  <ret> 발화 (turn1 첫 프레임)
     4.06s  agent 발화 시작: <ret> 일반적으로 FOB destination 조건에서는 구매자가 운송비를 부담합니다. 물품이 최종 목적
     4.06s  ⚡SPAN 주입 [d'=0.50s / d_lead=10.25s]: The buyer.
     4.26s  user  발화 끝
    14.31s  agent 발화 끝
    15.69s  user  발화 시작: 아, 그렇군요.
    16.46s  agent 발화 시작: 혹시 다른 궁금한 점이 있으신가요? 운송 조건은 복잡할 수 있으니 편하게 질문해 주세요.
    16.66s  user  발화 끝
    20.58s  user  발화 시작: 예.
    20.89s  user  발화 끝
    21.82s  user  발화 시작: 그럼, FOB shipping point 조건은요?
    21.93s  agent 발화 끝
    23.53s  <ret> 발화 (turn6 첫 프레임)
    23.77s  agent 발화 시작: <ret> FOB shipping point 조건에서는 판매자가 운송비를 부담합니다. 판매자의 구역에서 물품
    23.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.21s]: The seller.
    23.98s  user  발화 끝
    29.67s  user  발화 시작: 예.
    30.16s  user  발화 끝
    31.98s  agent 발화 끝
    32.09s  agent 발화 시작: 운송 조건에 따라 책임 소재가 달라지기 때문에, 계약 전에 꼼꼼히 확인하는 것이 중요합니다. 혹시 어떤 계약
    36.08s  user  발화 시작: 음.
    36.71s  user  발화 끝
    40.07s  agent 발화 끝
    40.19s  user  발화 시작: 지금 새로운 거래를 알아보고 있는데.
    42.28s  agent 발화 시작: 새로운 거래를 알아보고 계시는군요. 좋은 조건으로 계약을 성사시키시길 바랍니다.
    42.49s  user  발화 끝
    48.01s  user  발화 시작: 그런데, FOB 조건 말고 다른 조건은 뭐가 있을까요?
    48.16s  agent 발화 끝
    50.80s  <ret> 발화 (turn13 첫 프레임)
    51.11s  user  발화 끝
    51.20s  agent 발화 시작: <ret> CIF, 즉 Cost and Freight 조건도 있습니다. 이 조건은 물품 가격에 운송비까지 포
    51.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.01s]: CIF, Cost and Freight.
    62.46s  user  발화 시작: …그런데, 보험료는 누가 부담하는 거예요?
    63.21s  agent 발화 끝
    65.60s  user  발화 끝
    65.75s  agent 발화 시작: 보험료는 보통 CIF 조건에서는 판매자가 부담합니다. 하지만 FOB 조건에서는 구매자가 별도로 보험을 가입해
    71.38s  user  발화 시작: 네.
    71.73s  user  발화 끝
    73.96s  agent 발화 끝
    74.51s  user  발화 시작: 아, 그렇군요. 명확하게 알 것 같아요.
    76.91s  user  발화 끝
    77.34s  agent 발화 시작: 다행입니다. 운송 조건과 관련된 부분은 꼼꼼히 확인하는 것이 중요합니다.
    79.94s  user  발화 시작: 예.
    80.25s  user  발화 끝
    82.34s  agent 발화 끝
    82.34s  user  발화 시작: 오늘은 여기까지 할게요. 감사합니다.
    84.40s  agent 발화 시작: 천만에요. 도움이 되었다니 기쁩니다.
    84.42s  user  발화 끝
    86.99s  agent 발화 끝
