# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 음, 디스토피아 소설 읽다가 그런 생각을 하게 됐나 보네.
     3.81s  <ret> 발화 (turn1 첫 프레임)
     3.93s  user  발화 끝
     4.05s  agent 발화 시작: <ret> 그건 흔한 반응이야. “빅 브라더”라는 용어는 조지 오웰의 천구백사십구 년 소설, *Ninetee
     5.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.82s]: <Nineteen Eighty-Four is a dystopian novel published in 1949 by Englis
    13.09s  agent 발화 끝
    13.50s  user  발화 시작: 근데 그 사람은 그 아이디어를 어디서 얻은 거예요?
    16.33s  agent 발화 시작: 오웰은 자기 경험에서 많이 영감을 받았어.
    16.41s  user  발화 끝
    19.75s  agent 발화 끝
    20.31s  user  발화 시작: 경험이 어떻게요? 혹시 비밀경찰이었거나 그런 거예요?
    23.86s  <ret> 발화 (turn5 첫 프레임)
    24.02s  agent 발화 시작: <ret> 그 사람 배경에 대해서 궁금해하는 건 당연해. 오웰은 스페인 내전에서 싸웠고, 전체주의 감시를 직
    24.10s  user  발화 끝
    24.36s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.46s]: <Orwell fought with the POUM militia during the Spanish Civil War, wit
    31.44s  agent 발화 끝
    31.60s  user  발화 시작: 그러니까 그냥 상상한 게 아니었군요?
    33.71s  agent 발화 시작: 절대 그렇지 않아. 직접 관찰한 게 생각을 형성했어.
    33.72s  user  발화 끝
    37.41s  agent 발화 끝
    37.48s  user  발화 시작: 그거 흥미롭네요. 저는 그냥 재밌는 표현이라고 생각했어요.
    40.92s  agent 발화 시작: 사실 그 표현은 아주 깊은 뿌리를 가지고 있어.
    41.08s  user  발화 끝
    43.63s  user  발화 시작: 근데 감시는… 카메라가 여기저기 있었던 건가요, 아니면—
    43.70s  agent 발화 끝
    46.93s  <ret> 발화 (turn11 첫 프레임)
    47.33s  agent 발화 시작: <ret> 방법은 좀 더 은밀하고 광범위했어. 소설에는 시민들을 감시하는 양방향 텔레비전, “텔레스크린”이 
    47.42s  user  발화 끝
    48.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.94s]: <The surveillance in *Nineteen Eighty-Four* is primarily achieved thro
    54.09s  agent 발화 끝
    55.33s  user  발화 시작: 근데 그런 기술은—
    56.80s  user  발화 끝
    57.25s  agent 발화 시작: 그게 얼마나 흥미로운지 생각해 보면—
    59.16s  user  발화 시작: …CCTV 같은 게 나오기 훨씬 뒤에나 가능해진 거 아니에요?
    59.74s  agent 발화 끝
    62.85s  user  발화 끝
    63.11s  agent 발화 시작: 기술 발전과 관련해서 아주 중요한 지적을 했네.
    66.61s  user  발화 시작: 음…
    66.72s  agent 발화 끝
    67.29s  user  발화 끝
    67.96s  user  발화 시작: 그럼 오웰은 미래를 예언한 걸까요, 아니면…?
    70.73s  agent 발화 시작: 기존 추세를 아주 훌륭하게 추론한 거야.
    70.82s  user  발화 끝
    73.26s  user  발화 시작: 그러니까 카메라를 특별히 예견한 게 아니라…
    73.31s  agent 발화 끝
    75.94s  agent 발화 시작: 기술이 통제를 가능하게 할 잠재력을 알아봤어.
    75.94s  user  발화 끝
    79.87s  agent 발화 끝
