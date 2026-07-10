# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "다민",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-05-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 맘마미아에 나오는 '나의 사랑 나의 인생'을 누가 썼는지 궁금 | S2 체스도 아바 멤버들이 만든 거예요? | S3 두 분의 음악 스타일이 잘 어울리는 것… | S4 음반 출판 회사도 운영한다니 대단하네요.

     0.00s  user  발화 시작: 맘마미아에 나오는 '나의 사랑 나의 인생'을 누가 썼는지 궁금해요.
     4.26s  <ret> 발화 (turn1 첫 프레임)
     4.35s  user  발화 끝
     4.41s  agent 발화 시작: <ret> 그 곡은 비외른 울바에우스가 작사했어요. 맘마미아 넘버들을 좋아하시는군요.
     6.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: The capital of Australia is Canberra.
    10.13s  user  발화 시작: 아, 정말요? 비외른 울바에우스는 다른 유명한 곡도 많이 썼어요?
    10.15s  agent 발화 끝
    14.83s  agent 발화 시작: 아바의 많은 히트곡들을 작곡했고, 뮤지컬 '체스'에도 참여했어요.
    14.86s  user  발화 끝
    19.59s  agent 발화 끝
    21.45s  user  발화 시작: 체스도 아바 멤버들이 만든 거예요?
    23.85s  user  발화 끝
    24.39s  agent 발화 시작: 아니요, '체스'는 벤ny 앤더슨과 팀 라이스, 그리고 비외른 울바에우스가 함께 만들었어요.
    28.28s  user  발화 시작: 음.
    28.68s  user  발화 끝
    30.93s  agent 발화 시작: 벤ny 앤더슨은 작곡가로서 비외른 울바에우스와 환상적인 조합을 보여주죠.
    31.01s  agent 발화 끝
    33.18s  user  발화 시작: 네.
    33.67s  user  발화 끝
    36.30s  user  발화 시작: 두 분의 음악 스타일이 잘 어울리는 것…
    36.36s  agent 발화 끝
    38.19s  user  발화 끝
    39.27s  user  발화 시작: …같아요. 혹시 비외른 울바에우스의 다른 활동도 있나요?
    42.78s  <ret> 발화 (turn11 첫 프레임)
    43.16s  user  발화 끝
    43.17s  agent 발화 시작: <ret> 네, 그는 작곡 외에도 프로듀서, 음악가, 사업가로도 활동하고 있어요. 다양한 분야에서 활약하고 
    44.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.48s]: (tool result) Björn Ulvaeus is a co-founder of Polar Music Internation
    49.62s  agent 발화 시작: 비외른 울바에우스는 폴라 뮤직 인터내셔널이라는 음반 출판 회사의 공동 창립자이기도 해요. 음악 사업에도 깊이
    49.65s  agent 발화 끝
    52.95s  user  발화 시작: 네.
    53.30s  user  발화 끝
    58.98s  user  발화 시작: 음반 출판 회사도 운영한다니 대단하네요.
    59.13s  agent 발화 끝
    61.61s  user  발화 끝
    61.77s  agent 발화 시작: 맞아요. 음악가로서의 성공뿐만 아니라 사업가로서도 뛰어난 능력을 보여주고 계시는 것 같아요.
    67.74s  agent 발화 끝
