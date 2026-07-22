# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "민진",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "airline",
#       "text": "User usually flies with ANA."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "partner",
#       "text": "User's partner is named Lucas."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "pet",
#       "text": "User has a Pomeranian named Bori."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "medication",
#       "text": "User takes antihistamines in spring."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "work",
#       "text": "User works as a musician."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-09",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2026-03-03",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-01-13",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 나 지금 약국이 급하게 필요한데, 내 위치가 위도 사십일 점  | S2 응, 알았어. 근데 요즘 너무 바빠서 정신이 하나도 없네. | S3 고마워. 아, 그리고 나 공포 영화 보고 싶은데 추천 좀 해줄 | S4 오, 그거 괜찮겠다. 바로 예매해 줘.

     0.00s  user  발화 시작: 나 지금 약국이 급하게 필요한데, 내 위치가 위도 사십일 점 팔 칠, 경도 -팔십칠 점 육 이거든. 팔백미터
     8.69s  <ret> 발화 (turn1 첫 프레임)
     8.82s  agent 발화 시작: <ret> 근처에 약국이 두 곳 있네요. 삼백사미터 거리에 씨브이에스 파마시가 있고, 사백미터 거리에는 월그
     8.95s  user  발화 끝
     9.99s  ⚡SPAN 주입 [d'=1.30s / d_lead=2.32s]: (tool result) 41.8781,-87.6298 (41.87763, -87.63002): CVS Pharmacy (30
    15.07s  user  발화 시작: 응, 알았어. 근데 요즘 너무 바빠서 정신이 하나도 없네.
    15.31s  agent 발화 끝
    19.35s  agent 발화 시작: [sigh] 많이 지치셨나 봐요. 우선순위를 정해서 하나씩 처리하면 마음이 한결 편해지실 거예요.
    19.43s  user  발화 끝
    21.02s  user  발화 시작: 어.
    21.52s  user  발화 끝
    24.68s  agent 발화 시작: 너무 무리하지 마시고, 잠시 숨을 고르는 시간도 꼭 가지세요.
    24.86s  agent 발화 끝
    28.47s  user  발화 시작: 고마워. 아, 그리고 나 공포 영화 보고 싶은데 추천 좀 해줄래?
    28.52s  agent 발화 끝
    29.77s  agent 발화 시작: 음.
    30.26s  agent 발화 끝
    32.12s  <ret> 발화 (turn8 첫 프레임)
    32.22s  agent 발화 시작: <ret> 공포 영화 한 편 찾아봤어요. 조이 마거릿 콜레티가 출연하고 안드레 오브레달이 감독한 스케어리 스
    32.49s  user  발화 끝
    33.37s  ⚡SPAN 주입 [d'=1.25s / d_lead=2.03s]: (tool result) Scary Stories to Tell in the Dark, Zoe Margaret Colletti
    35.04s  user  발화 시작: 아.
    35.58s  user  발화 끝
    40.74s  agent 발화 끝
    41.67s  user  발화 시작: 오, 그거 괜찮겠다. 바로 예매해 줘.
    44.05s  <ret> 발화 (turn11 첫 프레임)
    44.12s  agent 발화 시작: <ret> [happy] 네, 요청하신 스케어리 스토리즈 투 텔 인 더 다크 영화 예매가 완료되었습니다.
    44.26s  user  발화 끝
    44.72s  ⚡SPAN 주입 [d'=0.68s / d_lead=4.81s]: (tool result) Ticket booked for Scary Stories to Tell in the Dark.
    48.93s  agent 발화 끝
