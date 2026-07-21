# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "윤형",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "plant",
#       "text": "User is growing a lemon tree at home."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "show",
#       "text": "User is currently watching a slow-burn detective drama."
#     },
#     {
#       "date": "2026-02-25",
#       "category": "car",
#       "text": "User drives a 2018 Mazda CX-5."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "emergency",
#       "text": "User's emergency contact is Leo."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-04",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2025-12-27",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 후이아님. 요즘 마음이 너무 힘들어요. | S2 그런데… 독일 연방은 몇 개의 주로 이루어져 있나요? 갑자기  | S3 아, 그렇군요. 그럼 혹시… | S4 …혹시 제가 지금 너무 예민한 걸까요? 자꾸 옛날 일이 떠올라

     0.00s  user  발화 시작: 안녕하세요, 후이아님. 요즘 마음이 너무 힘들어요.
     3.19s  user  발화 끝
     3.48s  agent 발화 시작: 안녕하세요. 힘든 시간을 보내고 계시는군요. 괜찮아요, 천천히 이야기해 주세요.
     5.83s  user  발화 시작: 네.
     6.34s  user  발화 끝
     8.94s  agent 발화 끝
     9.40s  user  발화 시작: 어떻게 해야 괜찮아질까요? 슬픔이 파도처럼 밀려와요.
    13.26s  <ret> 발화 (turn4 첫 프레임)
    13.70s  user  발화 끝
    13.75s  agent 발화 시작: <ret> 슬픔은 그렇게 느껴지는 게 맞아요. 슬픔은 파도처럼 밀려왔다 사라지곤 하죠, 예상치 못하게요. 괜
    14.75s  ⚡SPAN 주입 [d'=1.49s / d_lead=3.52s]: Grief comes in waves, sometimes crashing over you unexpectedly and the
    24.30s  user  발화 시작: 그런데… 독일 연방은 몇 개의 주로 이루어져 있나요? 갑자기 궁금해졌어요.
    24.32s  agent 발화 끝
    25.91s  agent 발화 시작: 네.
    26.54s  agent 발화 끝
    29.12s  <ret> 발화 (turn7 첫 프레임)
    29.74s  agent 발화 시작: <ret> 음, 좋은 질문이에요. 솔직히 그건 어디에도 기록이 없어서, 저도 답을 찾을 수가 없네요.
    29.84s  user  발화 끝
    30.68s  ⚡SPAN 주입 [d'=1.56s / d_lead=1.67s]: (no information found)
    32.69s  user  발화 시작: 맞아요.
    33.41s  user  발화 끝
    36.96s  agent 발화 끝
    37.13s  user  발화 시작: 아, 그렇군요. 그럼 혹시…
    39.70s  agent 발화 시작: 마음이 무거울 땐, 주변 사람들에게 기대보는 건 —
    39.84s  user  발화 끝
    42.57s  user  발화 시작: …혹시 제가 지금 너무 예민한 걸까요? 자꾸 옛날 일이 떠올라요.
    43.17s  agent 발화 끝
    46.38s  agent 발화 시작: 아니요, 절대 예민한 게 아니에요. 힘든 시간 속에서 과거의 기억이 떠오르는 건 당연해요.
    46.42s  user  발화 끝
    53.16s  <ret> 발화 (turn13 첫 프레임)
    53.38s  agent 발화 끝
    53.39s  agent 발화 시작: <ret> 과거의 기억을 마주하는 건 중요해요. 과거의 기억을 느끼고 받아들이는 건 치유의 중요한 부분이에요
    54.46s  ⚡SPAN 주입 [d'=1.30s / d_lead=2.68s]: Allowing yourself to feel and process past memories is a crucial part 
    55.97s  user  발화 시작: 예.
    56.41s  user  발화 끝
    61.94s  agent 발화 시작: 오늘 하루, 아주 작은 일이라도 하나만 해보는 건 어떠세요? 산책을 하거나, 좋아하는 음악을 듣는 것처럼요.
    61.96s  agent 발화 끝
    69.53s  agent 발화 끝
