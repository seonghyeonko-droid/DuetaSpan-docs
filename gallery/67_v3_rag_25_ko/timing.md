# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "도진",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-07-28",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-15",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 트레버 프랭글리 선수가 라이트급 말고 다른 체급에서 싸운 적이 | S2 잠깐만요, 그럼 라이트급으로 전향하기 전에 페더급에서 패배한  | S3 … 혹시 그 경기 결과에 대해 좀 더 자세히 알 수 있을까요? | S4 아, 벨레이터 경기였군요. 혹시 프랭글리 선수가 다른 단체에서

     0.00s  user  발화 시작: 트레버 프랭글리 선수가 라이트급 말고 다른 체급에서 싸운 적이 있나요?
     3.96s  <ret> 발화 (turn1 첫 프레임)
     4.11s  agent 발화 시작: <ret> 트레버 프랭글리 선수는 라이트급 외에도 페더급에서도 경기를 치렀습니다.
     4.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.73s]: Trevor Prangley has competed in the Featherweight division, in additio
     4.31s  user  발화 끝
     6.82s  user  발화 시작: 네.
     7.17s  user  발화 끝
     8.83s  agent 발화 끝
     9.47s  user  발화 시작: 페더급이라고요? 음, 그 체급에서 얼마나 활약했는지 궁금하네요.
    13.43s  <ret> 발화 (turn4 첫 프레임)
    13.50s  agent 발화 시작: <ret> 페더급에서는 세 번 경기를 했고, 한 번 이기고 두 번 졌다가 라이트급에 집중했습니다.
    13.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: Prangley fought three times in the Featherweight division, winning one
    13.68s  user  발화 끝
    16.95s  user  발화 시작: 네.
    17.41s  user  발화 끝
    19.19s  agent 발화 끝
    19.63s  user  발화 시작: 잠깐만요, 그럼 라이트급으로 전향하기 전에 페더급에서 패배한 두 번의 경기는 언제였죠? —
    25.26s  user  발화 시작: … 혹시 그 경기 결과에 대해 좀 더 자세히 알 수 있을까요?
    25.42s  user  발화 끝
    28.36s  <ret> 발화 (turn8 첫 프레임)
    28.43s  agent 발화 시작: <ret> 페더급에서 패배한 두 번의 경기는 이천십오년 십일월 이십칠일 제이슨 영 선수와의 경기와 이천십육년
    28.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.76s]: His two losses in the Featherweight division were against Jason Young 
    28.49s  user  발화 끝
    39.10s  user  발화 시작: 알렉스 리치 선수와의 경기는 어떻게 진행됐는지 기억나시나요?
    39.19s  agent 발화 끝
    43.07s  <ret> 발화 (turn10 첫 프레임)
    43.23s  agent 발화 시작: <ret> 알렉스 리치 선수는 이천십육년 이월 이십칠일 캘리포니아주 산호세에서 열린 벨레이터 백사십팔에서 심
    43.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.46s]: Alex Ricci defeated Trevor Prangley by unanimous decision at Bellator 
    43.46s  user  발화 끝
    54.69s  agent 발화 끝
    55.10s  user  발화 시작: 아, 벨레이터 경기였군요. 혹시 프랭글리 선수가 다른 단체에서도 활동했었나요?
    59.73s  agent 발화 시작: 트레버 프랭글리 선수는 다양한 단체에서 활동했습니다. 어떤 단체가 궁금하신가요?
    59.81s  user  발화 끝
    65.47s  agent 발화 끝
