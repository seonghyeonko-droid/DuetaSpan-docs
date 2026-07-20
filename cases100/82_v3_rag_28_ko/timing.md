# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "민훈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "mid 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-03",
#       "category": "floor",
#       "text": "User lives on the 3rd floor."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "hobby",
#       "text": "User is into calligraphy."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "work",
#       "text": "User works as a dentist."
#     },
#     {
#       "date": "2026-02-25",
#       "category": "allergy",
#       "text": "User is allergic to gluten."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "bloodtype",
#       "text": "User's blood type is A+."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "employer",
#       "text": "User works at a consulting firm."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-13",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-05-07",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-05-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-04-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 부크스 씨? 요즘 뭔가 새로운 취미를 시작하고 싶 | S2 독서는 좋아하는데, 요즘 읽을 책이 없어요. 뭐 재미있는 책  | S3 음… 로맨틱 코미디 영화는 좋아해요. 비슷한 느낌의 책은 없을 | S4 그럼, 다니엘 호킨스는 무슨 일을 하는 사람이에요?

     0.00s  user  발화 시작: 안녕하세요, 부크스 씨? 요즘 뭔가 새로운 취미를 시작하고 싶어서 고민이에요.
     6.16s  user  발화 끝
     6.16s  agent 발화 시작: 안녕하세요! 새로운 취미를 찾으시는군요. 어떤 걸 좋아하실지 함께 찾아봐요. 혹시 평소에 어떤 활동을 즐기셨
    13.72s  agent 발화 끝
    13.83s  user  발화 시작: 음… 사실 뭘 해야 할지 잘 모르겠어요. 그냥 뭔가 마음이 편안해지는 걸 찾고 싶어요.
    21.39s  user  발화 끝
    21.78s  agent 발화 시작: 마음이 편안해지는 취미를 원하시는군요. 차분하게 집중할 수 있는 활동은 어떠세요? 그림 그리기나 뜨개질 같은
    27.18s  user  발화 시작: 어.
    28.00s  user  발화 끝
    29.20s  agent 발화 끝
    29.21s  user  발화 시작: 뜨개질은 너무 어려울 것 같아요. 그림은 어릴 때 조금 그려봤는데, 잘 못 그려서 금방 포기했어요.
    34.95s  agent 발화 시작: 네.
    35.58s  agent 발화 끝
    37.48s  agent 발화 시작: 그림이 어려웠다니 아쉽네요. 그럼 독서는 어떠세요? 책 속에서 새로운 세계를 발견하는 것도 좋은 방법이에요.
    37.74s  user  발화 끝
    40.73s  user  발화 시작: 어.
    41.36s  user  발화 끝
    44.24s  agent 발화 끝
    44.33s  user  발화 시작: 독서는 좋아하는데, 요즘 읽을 책이 없어요. 뭐 재미있는 책 추천해 줄 수 있어요?
    49.95s  <ret> 발화 (turn10 첫 프레임)
    50.52s  agent 발화 시작: <ret> 이천구년에 출간된 다니엘 스미스의 소설 '다크 호스'를 추천해 드려요.
    50.63s  user  발화 끝
    50.89s  ⚡SPAN 주입 [d'=0.93s / d_lead=4.63s]: The Dark Horse is a 2009 novel by British author Daniel Smith.
    55.15s  agent 발화 끝
    56.63s  user  발화 시작: 다니엘 스미스요? 그 이름은 처음…
    60.24s  user  발화 끝
    61.42s  user  발화 시작: …듣는 것 같아요. 다른 책은 없을까요?
    64.65s  agent 발화 시작: 다른 책도 물론 있어요. 혹시 좋아하는 장르가 있으신가요? 아니면 최근에 재미있게 본 영화가 있으세요?
    64.75s  user  발화 끝
    71.37s  agent 발화 끝
    72.94s  user  발화 시작: 음… 로맨틱 코미디 영화는 좋아해요. 비슷한 느낌의 책은 없을까요?
    75.34s  agent 발화 시작: 그렇죠.
    76.31s  agent 발화 끝
    78.56s  <ret> 발화 (turn16 첫 프레임)
    78.89s  ⚡SPAN 주입 [d'=0.34s / d_lead=9.18s]: i believe in a thing called love is the debut single by British rock b
    79.17s  agent 발화 시작: <ret> 로맨틱 코미디를 좋아하시는군요. 이천삼년에 발표된 브리티시 록 밴드 더 다크니스의 데뷔 싱글 'I
    79.43s  user  발화 끝
    88.35s  agent 발화 끝
    88.61s  user  발화 시작: 잠깐만요, 그 노래요? 책이 아니라 노래잖아요. 책 추천해 달라고 했잖아요!
    94.81s  <ret> 발화 (turn18 첫 프레임)
    95.11s  agent 발화 시작: <ret> [happy] 아, 죄송합니다. 혼동했어요. 노래를 말씀드려서 혼란을 드렸네요. 잠시 다시 찾아볼
    95.16s  ⚡SPAN 주입 [d'=0.35s / d_lead=6.68s]: Dan Hawkins is the lead singer and rhythm guitarist for the British ro
    95.33s  user  발화 끝
   101.77s  agent 발화 시작: 다시 찾아보니, 'I Believe in a Thing Called Love'는 다니엘 호킨스가 속한 밴드 
   101.79s  agent 발화 끝
   108.40s  agent 발화 끝
   108.46s  user  발화 시작: 다니엘 호킨스요? 아까 그 다니엘 스미스랑 다른 사람이네요. 헷갈리게 하시는 거 아니에요?
   111.86s  agent 발화 시작: 네.
   112.50s  agent 발화 끝
   115.55s  user  발화 끝
   115.59s  agent 발화 시작: [sigh] 혼란을 드려 죄송합니다. 다니엘 스미스와 다니엘 호킨스는 다른 분이 맞습니다. 제가 설명을 제대
   118.81s  user  발화 시작: 그래.
   119.44s  user  발화 끝
   123.55s  user  발화 시작: 그럼, 다니엘 호킨스는 무슨 일을 하는 사람이에요?
   123.61s  agent 발화 끝
   126.88s  <ret> 발화 (turn25 첫 프레임)
   126.97s  user  발화 끝
   127.18s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.05s]: Dan Hawkins was born on 20 January 1976 in Langley Park, County Durham
   127.20s  agent 발화 시작: <ret> 다니엘 호킨스는 천구백칠십육년 일월 이십일, 영국 더럼 카운티의 랭글리 파크에서 태어났습니다.
   134.25s  agent 발화 끝
   134.26s  user  발화 시작: 영국 사람이었군요. 록 밴드에서 뭘 하나요?
   138.25s  agent 발화 시작: 다니엘 호킨스는 브리티시 록 밴드 '더 다크니스'의 리드 싱어이자 리듬 기타리스트입니다.
   138.33s  user  발화 끝
   143.85s  agent 발화 끝
   143.94s  user  발화 시작: 아, 그렇군요. 노래를 부르고 기타도 치는 거군요. 그럼, 이제 다시 책 추천해 주시겠어요?
   148.66s  agent 발화 시작: 아.
   149.29s  agent 발화 끝
   151.96s  user  발화 끝
   152.01s  agent 발화 시작: [happy] 네, 그럼요. 로맨틱 코미디 영화를 좋아하신다고 하셨으니, 비슷한 분위기의 책을 찾아볼게요. 
   159.43s  agent 발화 끝
