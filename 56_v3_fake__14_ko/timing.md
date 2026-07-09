# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "David",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 맘마미아에서 ‘나의 사랑, 나의 인생’을 누가 썼는지 궁금해요 | S2 비외른 울바에우스… 스웨덴 사람이에요? | S3 아, 그렇군요. ABBA 멤버였던 게 생각나네요. [inter | S4 아니요, 괜찮아요. 알려주셔서 정말 고마워요.

     0.00s  user  발화 시작: 맘마미아에서 ‘나의 사랑, 나의 인생’을 누가 썼는지 궁금해요.
     3.68s  <ret> 발화 (turn1 첫 프레임)
     3.84s  agent 발화 시작: <ret> 아, 맘마미아의 아름다운 노래죠. 어떤 분이 작곡하셨는지 알아볼게요.
     3.84s  user  발화 끝
     5.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: Björn Ulvaeus.
     9.54s  agent 발화 시작: 비외른 울바에우스 씨가 ‘나의 사랑, 나의 인생’을 작곡하셨답니다.
     9.68s  agent 발화 끝
    13.86s  user  발화 시작: 비외른 울바에우스… 스웨덴 사람이에요?
    13.98s  agent 발화 끝
    17.16s  <ret> 발화 (turn4 첫 프레임)
    17.42s  user  발화 끝
    17.48s  agent 발화 시작: <ret> 네, 맞아요. 스웨덴 출신이시랍니다. ABBA 그룹의 멤버이기도 하죠.
    19.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: Björn Ulvaeus was born in Gothenburg, Sweden on April 25, 1945.
    22.96s  agent 발화 시작: 비외른 울바에우스 씨는 스웨덴 예테보리에서 일구사오년 사월 이십오일에 태어나셨어요.
    23.12s  agent 발화 끝
    29.26s  agent 발화 끝
    29.35s  user  발화 시작: 아, 그렇군요. ABBA 멤버였던 게 생각나네요. [interrupting] 다른 노래도 많이 썼어요?
    35.28s  user  발화 끝
    35.47s  agent 발화 시작: 물론이죠. ABBA의 수많은 히트곡에 참여하셨어요—
    39.33s  <ret> 발화 (turn8 첫 프레임)
    39.41s  agent 발화 시작: <ret> ‘댄싱 퀸’이나 ‘워터루’ 같은 유명한 노래도 비외른 울바에우스 씨의 작품이랍니다.
    39.59s  agent 발화 끝
    41.33s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.18s]: (tool result) symbol: AAPL; price: 170.34; change: +1.25; timestamp: 2
    42.44s  user  발화 시작: 음.
    42.94s  user  발화 끝
    44.43s  agent 발화 시작: 작곡가로서 정말 다재다능하신 분이시죠. 혹시 다른 맘마미아 노래에 대해서도 궁금하신가요?
    44.59s  agent 발화 끝
    47.05s  user  발화 시작: 네.
    47.64s  user  발화 끝
    50.68s  agent 발화 끝
    51.03s  user  발화 시작: 아니요, 괜찮아요. 알려주셔서 정말 고마워요.
    54.73s  user  발화 끝
    55.04s  agent 발화 시작: 천만에요. 새로운 도시에 정착하시는 동안 언제든 편하게 물어보세요.
    60.37s  agent 발화 끝
