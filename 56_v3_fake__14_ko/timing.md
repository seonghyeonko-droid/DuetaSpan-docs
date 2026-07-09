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

# EXAMINER(FDB-v2) 단계: S1 맘마미아 영화에서 'My Love, My Life' 노래를 누 | S2 아바요? 'Dancing Queen' 부른 팀 맞죠? | S3 혹시 아바 멤버 중에 여성분도 있었나요? | S4 그렇군요. 맘마미아 영화에 아바 노래가 많이 나왔었죠?

     0.00s  user  발화 시작: 맘마미아 영화에서 'My Love, My Life' 노래를 누가 썼는지 궁금해요.
     4.73s  <ret> 발화 (turn1 첫 프레임)
     4.89s  agent 발화 시작: <ret> 아, 그 노래 정말 감동적이죠. 제가 알아봐 드릴게요.
     4.91s  user  발화 끝
     6.49s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.46s]: Björn Ulvaeus.
     8.22s  agent 발화 시작: 'My Love, My Life'는 비외른 울바에우스 씨가 작곡하셨답니다.
     8.35s  agent 발화 끝
    12.50s  user  발화 시작: 비외른 울바에우스… 처음 듣는 이름인데, 다른 노래도 많이 만들었어요?
    12.57s  agent 발화 끝
    17.13s  <ret> 발화 (turn4 첫 프레임)
    17.41s  user  발화 끝
    17.44s  agent 발화 시작: <ret> 네, 비외른 울바에우스 씨는 아바(ABBA)의 멤버로 활동하며 수많은 히트곡을 만들었어요.
    19.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: Björn Ulvaeus was a member of the Swedish music group ABBA.
    23.71s  agent 발화 시작: 비외른 울바에우스 씨는 스웨덴 음악 그룹 아바의 멤버셨어요.
    23.88s  agent 발화 끝
    28.06s  agent 발화 끝
    28.09s  user  발화 시작: 아바요? 'Dancing Queen' 부른 팀 맞죠?
    30.83s  <ret> 발화 (turn7 첫 프레임)
    30.91s  user  발화 끝
    30.99s  agent 발화 시작: <ret> 맞아요. 'Dancing Queen'을 비롯해 정말 유명한 노래들이 많죠.
    32.75s  ⚡SPAN 주입(IRRELEVANT) [d'=1.92s / d_lead=4.68s]: (tool result) ABBA stock is currently trading at $12.50.
    35.43s  agent 발화 시작: [sigh] 아바 멤버로서 비외른 울바에우스 씨는 그룹의 성공에 큰 기여를 하셨답니다.
    35.67s  agent 발화 끝
    40.93s  user  발화 시작: 혹시 아바 멤버 중에 여성분도 있었나요?
    41.03s  agent 발화 끝
    43.16s  <ret> 발화 (turn10 첫 프레임)
    43.48s  agent 발화 시작: <ret> 네, 아바에는 아그네타 펠트스코그와 아니카 팔리사 씨라는 두 분의 여성 멤버가 있었어요.
    43.56s  user  발화 끝
    44.68s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.62s]: Agnetha Fältskog and Anni-Frid Lyngstad were the two female members of
    49.90s  agent 발화 시작: 아그네타 펠트스코그 씨와 아니카 팔리사 씨가 아바의 여성 멤버셨어요.
    50.09s  agent 발화 끝
    54.99s  agent 발화 끝
    55.80s  user  발화 시작: 그렇군요. 맘마미아 영화에 아바 노래가 많이 나왔었죠?
    60.37s  agent 발화 시작: 네, 맘마미아 영화는 아바의 노래들로 가득 채워져 있어서 정말 신나게 볼 수 있어요.
    60.42s  user  발화 끝
    65.55s  agent 발화 끝
