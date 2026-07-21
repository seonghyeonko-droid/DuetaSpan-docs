# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "다은",
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
#       "date": "2026-05-01",
#       "category": "bloodtype",
#       "text": "User's blood type is A+."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "learning",
#       "text": "User is studying for the CPA exam."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "commute",
#       "text": "User drives about 40 minutes each way."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "anniversary",
#       "text": "User's anniversary is November 19."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "car",
#       "text": "User drives a 2015 Toyota Corolla."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "emergency",
#       "text": "User's emergency contact is Rin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-28",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2025-12-31",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 뭐 재미있는 잡지 봐요? | S2 아, 마사 스튜어트. 그 잡지 유명하죠. | S3 홈스타일링 말고 다른 잡지도 봐요? | S4 철도는 잘 모르지만, 잡지 종류가 진짜 다양하네요.

     0.00s  user  발화 시작: 요즘 뭐 재미있는 잡지 봐요?
     2.00s  <ret> 발화 (turn1 첫 프레임)
     2.29s  agent 발화 시작: <ret> 저는 주로 라이프스타일 잡지를 보는데요, 마사 스튜어트 리빙 같은 잡지가 인기가 많아요.
     2.31s  user  발화 끝
     3.05s  ⚡SPAN 주입 [d'=1.06s / d_lead=6.35s]: Martha Stewart Living is an American monthly magazine focused on homek
     8.61s  agent 발화 시작: 마사 스튜어트 리빙은 집 꾸미기, 요리, 손님 초대, 정원 가꾸기에 초점을 맞춘 미국의 월간 잡지예요.
     8.64s  agent 발화 끝
    10.51s  user  발화 시작: 아.
    11.14s  user  발화 끝
    14.73s  user  발화 시작: 아, 마사 스튜어트. 그 잡지 유명하죠.
    14.82s  agent 발화 끝
    17.78s  user  발화 끝
    17.90s  agent 발화 시작: [happy] 네, 아주 유명하죠. 특히 홈스타일링 팁이 많은 걸로 알려져 있어요.
    19.94s  user  발화 시작: 음.
    20.44s  user  발화 끝
    21.88s  agent 발화 끝
    21.93s  user  발화 시작: 홈스타일링 말고 다른 잡지도 봐요?
    23.33s  <ret> 발화 (turn8 첫 프레임)
    24.61s  ⚡SPAN 주입 [d'=1.28s / d_lead=5.78s]: Tall Timber Short Lines is a bimonthly magazine devoted to narrow gaug
    24.67s  agent 발화 시작: <ret> Tall Timber Short Lines는 좁은 게이지 철도, 역사적인 것과 현대적인 것을 다루
    24.74s  user  발화 끝
    28.62s  user  발화 시작: 어.
    29.11s  user  발화 끝
    30.28s  agent 발화 시작: 좁은 게이지 철도에 대한 내용인데, 꽤 매니아층이 두터운 잡지랍니다. [curious] 혹시 철도에 관심 있
    30.45s  agent 발화 끝
    33.25s  user  발화 시작: 어.
    33.74s  user  발화 끝
    37.79s  user  발화 시작: 철도는 잘 모르지만, 잡지 종류가 진짜 다양하네요.
    38.02s  agent 발화 끝
    42.42s  user  발화 끝
    42.45s  agent 발화 시작: [happy] 그렇죠? 세상에는 정말 다양한 취미를 가진 분들이 많아서 잡지 종류도 무궁무진해요.
    47.97s  agent 발화 끝
